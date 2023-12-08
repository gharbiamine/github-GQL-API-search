pipeline {
    agent any
    tools { 
        nodejs 'Node 20.6.1' 
    }

     environment{
        registry = "gharbiamine/github-gql"
        registryCredential = 'dockerhub-login'  
        AWS_ACCESS_KEY_ID = credentials('aws-access-key-id')
        TF_VAR_AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
        TF_VAR_GITHUB_OAUTH_TOKEN = credentials('github-oauth-token') 
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
                    dockerImage = docker.build registry + ":0.2.dev.$BUILD_NUMBER"
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }   
                }
            }
        }

        stage('Deploy container to AWS with Terraform') {
            steps {
                script {
                    sh 'terraform init'
                }
            }
        }       

    }
}


