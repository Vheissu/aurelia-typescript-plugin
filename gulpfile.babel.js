import del from 'del';
import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('cleanup', () => {
    return del([
        "dist/**",
        "__temp"
    ]);
});

gulp.task("remove-temp", () => {
    return del([
        "__temp"
    ]);
});

gulp.task('tsc', shell.task([
    "tsc --project tsconfig.json",
    "tsc --project tsconfig.dts.json",
    "cp __temp/dts/typings.d.ts dist/",
    "gulp remove-temp"
]));

gulp.task("default", ["cleanup", "tsc"]);