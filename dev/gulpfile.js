const gulp = require("gulp")
const stylus = require("gulp-stylus")
const plumber = require("gulp-plumber")

const browserSync = require("browser-sync").create()

gulp.task( "browser-sync", function() {
  browserSync.init({
    proxy: "gutenblocks.local"
  })

  gulp.watch("./stylus/**/*.styl", ["stylus-admin-css"])
})

gulp.task("stylus-admin-css", function() {
  return gulp
    .src("./stylus/advanced-gutenberg-blocks-admin.styl")
    .pipe(plumber())
    .pipe(
      stylus({
        compress: true
      })
    )
    .pipe(gulp.dest("../admin/css"))
    .pipe(browserSync.stream())
})

gulp.task("watch", ["browser-sync"])