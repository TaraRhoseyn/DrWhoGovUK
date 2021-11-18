const gulp = require('gulp');
const render = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
  return gulp.src('src/pages/*')
  .pipe(render({
      path: ['src/templates']
    }))
  .pipe(gulp.dest('public'))
});