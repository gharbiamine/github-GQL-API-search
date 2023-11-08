pipeline {
    agent any
    tools { 
        nodejs 'Node 20.6.1' 
    }

     environment{
        registry = "gharbiamine/github-gql"
        registryCredential = 'dockerhub-login'        
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: 'github-api-key', url: 'https://github.com/gharbiamine/github-GQL-API-search'
            }
        }

        stage('Prepare') {
            steps{
                sh "npm install"
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build and push to Dockerhub') {
            steps {
                sh 'npm run build'
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }

        
    }
}


