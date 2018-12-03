var gulp = require('gulp');

gulp.task('copy:html', function() {
    return gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('copy:json', function() {
    return gulp.src('src/**/*.json').pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy:html', 'copy:css', 'copy:json']);
