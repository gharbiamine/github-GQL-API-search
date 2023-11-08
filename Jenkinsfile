pipeline {
    agent any
    tools { 
        nodejs 'Node 20.6.1' 
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: 'github-api-key', url: 'https://github.com/gharbiamine/github-GQL-API-search'
            }
        }

        stage('Prepare') {
            steps{
                sh "npm install -g yarn"
                sh "yarn install"
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


