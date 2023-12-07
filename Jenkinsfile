pipeline {
    agent any
    tools { 
        nodejs 'Node 20.6.1' 
    }

     environment{
        registry = "gharbiamine/github-gql"
        registryCredential = 'dockerhub-login'  
        AWS_ACCESS_KEY_ID = 'aws-access-key-id'
        AWS_SECRET_ACCESS_KEY = 'aws-secret-access-key'
        GITHUB_OAUTH_TOKEN = 'github-oauth-token' 
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
                    dockerImage = docker.build registry + ":0.2.$BUILD_NUMBER"
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }   
                }
            }
        }

        stage('Deploy container to AWS with Terraform') {
            steps {
                script {
                    sh 'pwd'
                    sh 'ls -la'
                    sh 'export aws_access_key=$AWS_ACCESS_KEY_ID'
                    sh 'export aws_secret_key=$AWS_SECRET_ACCESS_KEY'
                    sh 'export github_oauth_token=$GITHUB_OAUTH_TOKEN'
                    sh 'terraform init'
                    sh 'terraform plan'
                }
            }
        }       

    }
}


