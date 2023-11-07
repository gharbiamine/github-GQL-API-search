pipeline {
    agent any

    

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/gharbiamine/github-GQL-API-search'
            }
        }

        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }

        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }

        
    }
}
