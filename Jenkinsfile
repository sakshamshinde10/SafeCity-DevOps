pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t safecity:1.0 .'
            }
        }
    }

    post {
        success {
            echo 'SafeCity pipeline completed successfully!'
        }

        failure {
            echo 'SafeCity pipeline failed!'
        }
    }
}