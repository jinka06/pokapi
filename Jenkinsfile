pipeline {
    agent any

    environment{
        IMAGE = 'jinkura/pokapi'
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
    }
}