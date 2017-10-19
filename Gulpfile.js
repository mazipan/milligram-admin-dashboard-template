var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var cssnano = require('gulp-cssnano');
var header = require('gulp-header');
var sass = require('gulp-sass');
var rename = require("gulp-rename");

var pkg = require('./package.json');
var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('clean', function () {
    return gulp.src(['./dist/*.css'], {read: false})
        .pipe(clean());
});

gulp.task('sass', function () {
    return gulp
        .src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        port : 3000,
        server: "./"
    });

    gulp.watch("./sass/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// gulp.task('sass:prod', ['clean:dist'], function () {
//    var banner = ['/*!',
//         ' * Blibli Design System v.<%= pkg.version %>',
//         ' * build ' + new Date().toISOString().slice(0, 10).replace(/[^a-z0-9]/gi, ''),
//         ' */',
//         ''
//     ].join('\n');

//     return gulp
//         .src('./src/**/bliblicss.base.scss')
//         .pipe(sass(sassOptions))
//         .pipe(autoprefixer(autoprefixerOptions))
//         .pipe(header(banner, { pkg : pkg } ))
//         .pipe(gulp.dest(output));
// });

// gulp.task('sass:prod-rename', ['clean:dist', 'sass:prod'], function () {
//      return gulp.src(["./dist/**/*.css"])
//           .pipe(rename(function (path) {
//               path.basename += ".min";
//           }))
//           .pipe(gulp.dest(output));
// });

// gulp.task('sass:prod-minify', ['clean:dist', 'sass:prod', 'sass:prod-rename'], function() {
//   return gulp.src('./dist/**/*.min.css')
//       .pipe(cssnano())
//       .pipe(gulp.dest(output));
// });

gulp.task('default', ['clean', 'sass', 'serve']);
gulp.task('prod', ['clean', 'sass']);
