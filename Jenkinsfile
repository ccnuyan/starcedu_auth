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
        sh 'docker build -f ./dockerfiles/test.Dockerfile -t starcedu/auth:test .'
      }
    }
    stage('run test') {
      steps {
        sh 'docker run --name authtest -i starcedu/auth:test'
      }
    }
  }
}