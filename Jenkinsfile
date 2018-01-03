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
            sh 'docker rm -f database-test'
            sh 'docker run -d --name database-test -p 7654:5432 postgres:latest'
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
        sh 'docker rm -f authtest '
        sh 'docker run --name authtest -i --link database-test:database-test starcedu/auth:test'
      }
    }
    stage('build prod') {
      steps {
        sh 'docker build -f ./dockerfiles/build.Dockerfile -t startcedu/auth:latest .'
      }
    }
    stage('push prod') {
      steps {
        sh 'docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD" registry.cn-hangzhou.aliyuncs.com'
        sh '''docker tag startcedu/auth:latest registry.cn-hangzhou.aliyuncs.com/ccnuyan/startcedu/auth:latest
'''
        sh 'docker push registry.cn-hangzhou.aliyuncs.com/ccnuyan/startcedu/auth:latest'
      }
    }
  }
  environment {
    DOCKER_USERNAME = 'ccnuyan@live.com'
    DOCKER_PASSWORD = 'yanbx6ht'
  }
}