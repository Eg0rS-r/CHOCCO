const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require("gulp-rm");
const sass = require("gulp-sass");
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-pixel2rem');
const gcmq = require('gulp-group-css-media-queries');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');

const env = process.env.NODE_ENV;

const { DIST_PATH, SRC_PATH } = require("./gulp.config")

sass.compiler = require('node-sass');


task("clean", () => {
  return src("dist/**/*", { read: false }).pipe(rm());
});

task("copy:html", () => {
  return src("src/*.html")
    .pipe(dest("dist"))
    .pipe(reload({ stream: true }));
})

task("copy:img", () => {
  return src("src/img/**/*")
    .pipe(dest("dist/img"))
    .pipe(reload({ stream: true }));
})

task("copy:fonts", () => {
  return src("src/fonts/**/*")
    .pipe(dest("dist/fonts"))
    .pipe(reload({ stream: true }));
})

task("styles", () => {
  return src('src/styles/main.scss')
    .pipe(gulpif(env === 'dev',
      sourcemaps.init()
    ))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gcmq())
    .pipe(px2rem())
    .pipe(gulpif(env === 'prod',
      autoprefixer({
        cascade: false
      })
    ))
    .pipe(gulpif(env === "prod",
      cleanCSS({ compatibility: 'ie8' })
    ))
    .pipe(gulpif(env === "dev",
      sourcemaps.write()
    ))
    .pipe(dest('dist'))
    .pipe(reload({ stream: true }));
});

task("scripts", () => {
  return src('src/scripts/*.js')
    .pipe(gulpif(env === 'dev',
      sourcemaps.init()
    ))
    .pipe(concat('main.min.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulpif(env === "prod",
      uglify()
    ))
    .pipe(gulpif(env === "dev",
      sourcemaps.write()
    ))
    .pipe(dest('dist'))
    .pipe(reload({ stream: true }));
})

task("server", () => {
  browserSync.init({
    server: {
      baseDir: "dist"
    },
    open: false
  })
})


task("watch", () => {
  watch("src/styles/**/*.scss", series("styles"))
  watch("src/*.html", series("copy:html"))
  watch("src/scripts/*.js", series("scripts"))
  watch("src/images/icons/*.svg")
})


task("default", series(
  "clean",
  parallel("copy:html", "copy:img", "copy:fonts", "scripts", "styles"),
  parallel("server", "watch")
))