pipeline {
  agent any

  tools {
    nodejs "node14"
  }

  stages {
    stage('Read manifest') {
      steps {
        script {
            def manifest = readJSON file: './manifest.json'
            manifest.frontends.each { key, value ->
                echo "${value.repo}"
            }
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