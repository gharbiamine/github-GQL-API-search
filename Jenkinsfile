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
                    sh '''
                    pwd
                    ls -la
                    export TF_VAR_aws_access_key=$AWS_ACCESS_KEY_ID
                    echo $AWS_ACCESS_KEY_ID
                    echo $TF_VAR_aws_access_key
                    export TF_VAR_aws_secret_key=$AWS_SECRET_ACCESS_KEY
                    export TF_VAR_github_oauth_token=$GITHUB_OAUTH_TOKEN
                    terraform init
                    terraform plan
                    '''
                }
            }
        }       

    }
}


