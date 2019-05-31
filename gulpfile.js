const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task('styles', () => {
    return gulp.src([
        './node_modules/normalize.css/normalize.css',
        './node_modules/milligram/dist/milligram.min.css'
    ])
        .pipe(concat('concat.css'))
        .pipe(gulp.dest('./static/css/_gen/'));
});
