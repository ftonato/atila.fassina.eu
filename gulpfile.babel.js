import gulp from 'gulp';
import nunjucks from 'gulp-nunjucks';
import webserver from 'gulp-webserver';
import sass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import babel from 'gulp-babel';

gulp.task('js', () => {
    return gulp.src('./assets/js/main.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('nunjucks', () => {
    return gulp.src([
        './partials/index.html',
        './partials/articles.html'
        ])
    .pipe(nunjucks.compile({
        site: {
            baseurl: 'http://atilafassina.com/',
            page: {
                title: 'Átila Fassina'
            },
            author: {
                name: 'Átila Fassina',
                title: 'Front-end Developer',
                username: 'atilafassina'
            }
        }
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function () {
    return gulp.src('./assets/styles/_scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('imagemin', () => {
    return gulp.src('./assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images/'))
});

gulp.task('webserver', ['default'], () => {
  return gulp.src('./dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default', ['nunjucks', 'js', 'sass']);
gulp.task('deploy', ['nunjucks', 'js', 'sass', 'imagemin']);
gulp.task('dev', ['webserver']);
