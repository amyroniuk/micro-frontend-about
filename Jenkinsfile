repos = [
    'https://github.com/amyroniuk/micro-frontend.git'
]

pipeline {
  agent any

  tools {
    nodejs "node14"
  }

  stages {
    stage('Clone repos') {
      steps {
          sh 'rm -rf ./tmp && mkdir ./tmp'
          dir('tmp') {
            clone_repos(repos)
          }
      }
    }

    // stage('Test') {
    //   steps {
    //     sh 'npm test'
    //   }
    // }

    // stage('Build') {
    //   steps {
    //     sh 'npm run build'
    //   }
    // }
  }
}

def clone_repos(repos) {
    sh 'pwd'
    repos.each { repo ->
        sh "git clone ${repo}"
        sh 'ls'
        sh 'cat ./micro-frontend/src/frontends/frontend/index.js'
    }
}