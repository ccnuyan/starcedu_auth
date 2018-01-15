pipeline {
  agent any
  stages {
    stage('pull image') {
      parallel {
        stage('pull image') {
          steps {
            sh 'docker pull node:8'
          }
        }
        stage('run test db') {
          steps {
            sh 'docker ps -a | grep -o "database" | awk \'{print $1 }\' | xargs -I {} docker rm -f {}'
            sh 'docker run -d --name database postgres:latest'
            sh 'docker ps'
          }
        }
      }
    }
    stage('build test') {
      steps {
        sh 'docker rmi -f starcedu/auth:test'
        sh 'docker build -f ./dockerfiles/test.Dockerfile -t starcedu/auth:test .'
      }
    }
    stage('run test') {
      steps {
        sh 'docker run --rm --name authtest -i --link database:database -e DBHOST=database starcedu/auth:test'
      }
    }
    stage('build prod') {
      steps {
        sh 'docker build -f ./dockerfiles/prod.Dockerfile -t startcedu/auth:latest .'
      }
    }
    stage('push prod') {
      steps {
        sh 'docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD" registry.cn-hangzhou.aliyuncs.com'
        sh 'docker tag startcedu/auth:latest registry.cn-hangzhou.aliyuncs.com/ccnuyan/starcedu_auth:latest'
        sh 'docker push registry.cn-hangzhou.aliyuncs.com/ccnuyan/starcedu_auth:latest'
      }
    }
  }
  environment {
    DOCKER_USERNAME = 'ccnuyan@live.com'
    DOCKER_PASSWORD = '12345abcde'
  }
}