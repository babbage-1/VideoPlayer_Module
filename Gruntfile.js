module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-aws');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('.aws.json'),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "<%= aws.bucket %>"
      },
      build: {
        cwd: "client/dist",
        src: "**"
      }
    }
  })


}