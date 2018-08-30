const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  gulp.src(['src/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('build'));
});
