pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "akshay2001a/nodejs-app"
        DOCKER_CREDENTIALS_ID = "dockerhub-credentials"
        GIT_CREDENTIALS_ID = "36ff0bcd-3a76-47d6-a5a7-7315f966b7ba"
        GIT_REPO = "https://github.com/akshayviola/helm_app.git"
        HELM_CHART_PATH = "charts/nodejs-app"
    }
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_CREDENTIALS_ID) {
                        def app = docker.build("${DOCKER_IMAGE}:${env.BUILD_ID}")
                        app.push("latest")
                    }
                }
            }
        }
        stage('Update Helm Chart') {
            steps {
                script {
                    sh "sed -i 's/tag:.*/tag: \"${env.BUILD_ID}\"/' ${HELM_CHART_PATH}/values.yaml"
                    sh "git config --global user.email 'akshaysunil201@gmail.com'"
                    sh "git config --global user.name 'akshayviola'"
                    sh "git add ${HELM_CHART_PATH}/values.yaml"
                    sh "git commit -m 'Update Helm chart image tag to ${env.BUILD_ID}'"
                    sh "git push ${GIT_REPO} HEAD:main"
                }
            }
        }
    }
}
