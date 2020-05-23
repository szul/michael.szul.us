const gulp = require("gulp");
const concat = require("gulp-concat");

gulp.task('styles', () => {
    return gulp.src([
        './node_modules/normalize.css/normalize.css',
        './node_modules/milligram/dist/milligram.min.css',
        './node_modules/milligrid/dist/Milligrid.css',
    ])
        .pipe(concat('concat.css'))
        .pipe(gulp.dest('./static/css/_gen/'));
});
