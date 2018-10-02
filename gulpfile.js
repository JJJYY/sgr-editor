const gulp = require('gulp')
const jasmineBrowser = require('gulp-jasmine-browser')
const watch = require('gulp-watch')
const server = require('http-server')
const babel = require('gulp-babel')

const editorFiles = ['dist/sgr-editor.js']
const testFiles = ['test/helpers/*.js', 'test/**/*.test.js']

gulp.task('default', ['test:browser'])

gulp.task('test', () => {
  return gulp.src(editorFiles.concat(testFiles))
    .pipe(babel({
      ignore: editorFiles
    }))
    .pipe(jasmineBrowser.specRunner({ console: true }))
    .pipe(jasmineBrowser.headless({ driver: 'phantomjs' }))
})

gulp.task('test:browser', () => {
  const fileList = editorFiles.concat(testFiles)

  gulp.watch(testFiles.concat(['src/**']), ['build'])
  return gulp.src(fileList)
    .pipe(watch(fileList))
    .pipe(babel({
      ignore: editorFiles
    }))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({ port: 8000 }))
})

gulp.task('build', (done) => {
  require('./scripts/build')().then(done).catch(done)
})

gulp.task('server', () => {
  server.createServer({
    root: '.'
  }).listen(8080)
})
