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
  }
}