const postcss = require('gulp-postcss');
const gulp = require('gulp');
const watch = require('gulp-watch');
const slim = require('gulp-slim');
const autoprefixer = require('gulp-autoprefixer');
// const babel = require('gulp-babel');
// const del = require('del');
// const exec = require('child_process').exec;

const paths = {
  // allSrcJs: 'src/**/*.js',
  // libDir: 'lib',
  build: {
    html: 'build/',
    fonts: 'build/fonts/'
    img: 'build/img/'
    css: 'build/css/'
    js: 'build/js/'
  },
  src: {
    slim: 'src/templates/**/*.slim',
    fonts: 'src/fonts/**/*.*',
    img: 'src/img/**/*.*',
    css: 'src/css/application.scss',
    js: 'src/js/application.js'
  },
  watch: {
    slim: 'src/templates/**/*.slim',
    fonts: 'src/fonts/**/*.*',
    img: 'src/img/**/*.*',
    css: 'src/css/**/*.*',
    js: 'src/js/**/*.js'
  },
  clean: './build'
};

gulp.task('compile-html', function() {
  gulp.src(paths.src.slim)
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest(paths.build.html));
});

gulp.task('compile-fonts', function() {
  gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.build.fonts));
});

gulp.task('compile-img', function() {
  gulp.src(paths.src.img)
    .pipe(gulp.dest(paths.build.img));
});

gulp.task('compile-css', function() {
  var plugins = [
    autoprefixer({browsers: ['last 2 versions']})
  ];

  return gulp.src(paths.src.css)
    .pipe(postcss(plugins))
    .pipe(gulp.dest(paths.build.css));
});

gulp.task('compile-js', function() {
  gulp.src(paths.src.js)
    .pipe(gulp.dest(paths.build.js));
});



gulp.task('compile-all', [
  'compile-html',
  'compile-fonts',
  'compile-img',
  'compile-css',
  'compile-js'
]);



gulp.task('clean', function() {

});

gulp.task('webserver', function () {

});

gulp.task('watch', function() {

});

// gulp.task('clean', () => {
//   return del(paths.clean);
// });
//
// gulp.task('build', ['clean'], () => {
//   return gulp.src(paths.allSrcJs)
//     .pipe(babel())
//     .pipe(gulp.dest(paths.libDir));
// });
//
// gulp.task('main', ['build'], (callback) => {
//   exec(`node ${paths.libDir}`, (error, stdout) => {
//     console.log(stdout);
//     return callback(error);
//   });
// });
//
// gulp.task('watch', () => {
//   gulp.watch(paths.allSrcJs, ['main']);
// });
//
// gulp.task('default', ['watch', 'main']);
