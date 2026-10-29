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
                sh 'docker build -t $IMAGE:$IMAGE_TAG .'
            }
        }
    }
}