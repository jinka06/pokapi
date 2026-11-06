pipeline {
    agent any

    environment{
        IMAGE = 'jinkura/pokapi'
        SONAR_SCANNER_HOME = tool 'sonarqube-scanner-820'
    }

    tools {
        nodejs 'Node26121'
    }

    stages {
        stage('Set Image Tag') {
            steps {
                script { env.IMAGE_TAG = env.GIT_COMMIT.take(7)}
            }
        }
        
        stage('Install') {
            steps {
                sh 'npm ci --no-audit'
            }
        }

        stage('npm dependency audit') {
            steps {
                sh 'npm audit --audit-level=critical || true'
            }
        }

        stage('Unit testing'){
            steps {
                sh 'npm test'
            }
            post {
                always {
                    junit allowEmptyResults: true, testResults: 'test-results.xml'
                }
            }
        }

        stage('Code Coverage') {
            steps {
                catchError(buildResult: 'SUCCESS', message: 'Coverage step failed, to be fixed', stageResult: 'UNSTABLE') {
                    sh 'npm run coverage'
                }
                publishHTML([allowMissing: true, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'coverage/lcov-report/', reportFiles: 'index.html', reportName: 'Code Coverage HTML Report', useWrapperFileDirectly: true])
            }
        }

        stage('OWASP Dependency Check') {
            steps {
                withCredentials([string(credentialsId: 'nvd-api-key', variable: 'NVD_KEY')]){
                    dependencyCheck additionalArguments: '--scan ./ --out ./ --format ALL --disableYarnAudit --prettyPrint --data /var/jenkins_home/odc-data --nvdApiKey $NVD_KEY', odcInstallation: 'OWASP-DepCheck-13'
                    dependencyCheckPublisher pattern: 'dependency-check-report.xml', failedTotalCritical: 1, stopBuild: true
                }
            }
        }

        stage('SonarQube - SAST') {
            when { branch 'main' }
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    withSonarQubeEnv('sonarqube-server') {
                        sh '''
                            $SONAR_SCANNER_HOME/bin/sonar-scanner \
                              -Dsonar.projectKey=Pokapi \
                              -Dsonar.sources=. \
                              -Dsonar.exclusions=node_modules/**,coverage/**,dependency-check-*,trivy-* \
                              -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
                        '''
                    }
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build --pull -t $IMAGE:$IMAGE_TAG .'
            }
        }

        stage('Trivy Scan') {
            steps {
                sh '''
                    trivy image $IMAGE:$IMAGE_TAG \
                        --severity LOW,MEDIUM,HIGH --exit-code 0 --quiet \
                        --format json -o trivy-image-MEDIUM-results.json
 
                    trivy image $IMAGE:$IMAGE_TAG \
                        --severity CRITICAL --ignore-unfixed --exit-code 1 --quiet \
                        --format json -o trivy-image-CRITICAL-results.json
                '''
            }
            post {
                always {
                    sh '''
                        trivy convert --format template \
                            --template "@/usr/local/share/trivy/templates/html.tpl" \
                            --output trivy-image-MEDIUM-results.html trivy-image-MEDIUM-results.json || true
 
                        trivy convert --format template \
                            --template "@/usr/local/share/trivy/templates/html.tpl" \
                            --output trivy-image-CRITICAL-results.html trivy-image-CRITICAL-results.json || true
                    '''
                    publishHTML([allowMissing: true, alwaysLinkToLastBuild: true, keepAll: true,
                                 reportDir: './', reportFiles: 'trivy-image-CRITICAL-results.html',
                                 reportName: 'Trivy Image Critical Vul Report', useWrapperFileDirectly: true])
                    publishHTML([allowMissing: true, alwaysLinkToLastBuild: true, keepAll: true,
                                 reportDir: './', reportFiles: 'trivy-image-MEDIUM-results.html',
                                 reportName: 'Trivy Image Medium Vul Report', useWrapperFileDirectly: true])
                }
            }
        }

        stage('Docker Image Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds',
                                                  usernameVariable: 'DOCKER_USER',
                                                  passwordVariable: 'DOCKER_TOKEN')]) {
                    sh '''
                        echo "$DOCKER_TOKEN" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $IMAGE:$IMAGE_TAG
                        echo "Docker image pushed successfully"
                    '''
                }
            }
        }

        stage('GitOps Manifest Update') {
            when { branch 'main' }
            steps {
                withCredentials([usernamePassword(credentialsId: 'pokapi-gitops-token',
                                          usernameVariable: 'GIT_USER',
                                          passwordVariable: 'GIT_TOKEN')]) {
                    sh '''
                        rm -rf gitops
                        git clone https://$GIT_USER:$GIT_TOKEN@github.com/jinka06/pokapi-gitops.git gitops
                        cd gitops
                        sed -i "s|image:.*|image: $IMAGE:$IMAGE_TAG|" pokapi-gitops-deployment.yaml
                        grep -q "image: $IMAGE:$IMAGE_TAG" pokapi-gitops-deployment.yaml || { echo "Manifest update failed"; exit 1; }
                        git config user.name "jenkins"
                        git config user.email "jenkins@local"
                        if git diff --quiet; then
                            echo "Manifest already uses $IMAGE_TAG"
                        else
                            git commit -am "pokapi: update image to $IMAGE_TAG"
                            git push origin HEAD
                        fi
                        cd .. && rm -rf gitops
                    '''
                }
            }
        }
    }
}