pipeline {
    agent any

    tools {
        nodejs 'Node26121'
    }

    stages {
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
    }
}