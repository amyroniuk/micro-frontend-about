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
      clone_repos(repos)
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
    sh 'rm -rf ./tmp && mkdir ./tmp'
    repos.each { repo ->
        echo "${repo}"
    }
}