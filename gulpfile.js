var gulp = require("gulp");
var postcss = require('gulp-postcss');

gulp.task("copy:html", function() {
  return gulp.src("src/**/*.html")
    .pipe(gulp.dest("dist"));
});

gulp.task("copy:css", function() {
  return gulp.src("src/**/*.css")
    .pipe(postcss())
    .pipe(gulp.dest("dist"));
});

gulp.task("copy:json", function() {
  return gulp.src("src/**/*.json")
    .pipe(gulp.dest("dist"));
});

gulp.task("default", ["copy:html", "copy:css", "copy:json"]);
