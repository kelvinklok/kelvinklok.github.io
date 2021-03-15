const gulp = require('gulp'),
    git = require('gulp-git'),
    less = require('gulp-less'),
    fileinclude = require('gulp-file-include'),
    watch = require('gulp-watch');
var path = require('path');

gulp.task('lesscompile', function(cb){
  return gulp.src('./dev/styles/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./styles')),
  cb();
});

gulp.task('fileinclude', function(cb){
  gulp.src(['./dev/*.html'])
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file',
    indent: 'true'
  }))
  .pipe(gulp.dest('./')),
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

gulp.task('default', gulp.series('lesscompile', 'fileinclude'), function(cb){
  cb();
});

gulp.task('buildmode', function(cb){
  gulp.watch(['./dev/styles/*.less', './dev/*.html'], gulp.series('default'));
  cb();
});