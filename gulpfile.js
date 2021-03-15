var gulp = require('gulp'),
    git = require('gulp-git'),
    less = require('gulp-less'),
    watch = require('gulp-watch');
var path = require('path');

gulp.task('lesscompile', function(cb){
  return gulp.src('styles/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('styles')),
  cb();
});

gulp.task('commit', function(cb){
  return gulp.src ('.')
    .pipe(git.add())
    .pipe(git.commit('Gulp Commit')),
  cb();
});

gulp.task('push', function(cb){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  }),
  cb();
});

gulp.task('default', gulp.series('lesscompile'), function(cb){
  cb();
});

gulp.task('buildmode', function(cb){
  gulp.watch('styles/*.less', gulp.series('lesscompile'));
  cb();
});