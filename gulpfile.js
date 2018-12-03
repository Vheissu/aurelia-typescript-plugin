const gulp = require('gulp');
const modules = ['dist/amd', 'dist/commonjs', 'dist/es2015', 'dist/native-modules', 'dist/system'];

gulp.task('copy:css', function() {
    return gulp
        .src('src/**/*.css')
        .pipe(gulp.dest(modules[0]))
        .pipe(gulp.dest(modules[1]))
        .pipe(gulp.dest(modules[2]))
        .pipe(gulp.dest(modules[3]))
        .pipe(gulp.dest(modules[4]));
});

gulp.task('copy:html', function() {
    return gulp
        .src('src/**/*.html')
        .pipe(gulp.dest(modules[0]))
        .pipe(gulp.dest(modules[1]))
        .pipe(gulp.dest(modules[2]))
        .pipe(gulp.dest(modules[3]))
        .pipe(gulp.dest(modules[4]));
});

gulp.task('copy:json', function() {
    return gulp
        .src('src/**/*.json')
        .pipe(gulp.dest(modules[0]))
        .pipe(gulp.dest(modules[1]))
        .pipe(gulp.dest(modules[2]))
        .pipe(gulp.dest(modules[3]))
        .pipe(gulp.dest(modules[4]));
});

gulp.task('default', ['copy:html', 'copy:css', 'copy:json']);
