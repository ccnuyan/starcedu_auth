pipeline {
  agent any
  stages {
    stage('pull image') {
      steps {
        sh 'docker pull node:8'
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
        sh 'docker run --name authtest -i starcedu/auth:test'
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
}