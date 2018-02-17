var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('index', function () {
  var target = gulp.src('/Users/ellebower/Desktop/audivity-frontend-master/src/components/signup/Testhtml.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['/Users/ellebower/Desktop/audivity-frontend-master/src/components/signup/Signup.js', './Users/ellebower/Desktop/audivity-frontend-master/src/components/signup/Signup.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('/Users/ellebower/Desktop/audivity-frontend-master/src/components/signup/'));
});
