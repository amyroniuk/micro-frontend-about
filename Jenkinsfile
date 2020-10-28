pipeline {
  agent any

  tools {
    nodejs "node14"
  }

  stages {
    stage('Read manifest') {
      steps {
        script {
            def props = readJSON file: 'manifest.json'
            // echo "${props.frontends[0].repo}"
            props.frontends.each { key, value ->
                echo "${value}"
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