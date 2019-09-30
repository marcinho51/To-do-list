var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");


gulp.task("ruszsie", function(done) {
    console.log("no idę..");
    done();
});


gulp.task("sass", function() {
    return gulp.src("scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            sourceComments: 'map'
        }).on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
});

gulp.task("watch", function() {
    gulp.watch("./scss/**/*.scss", gulp.series("sass"));
});