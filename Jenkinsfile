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
    }
}