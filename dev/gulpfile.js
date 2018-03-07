const gulp = require("gulp")
const stylus = require("gulp-stylus")
const autoprefixer = require("gulp-autoprefixer")
const plumber = require("gulp-plumber")

const bs = require("browser-sync").create()

gulp.task("stylus-admin-css", function() {
  return gulp
    .src("./stylus/gutenblocks-admin.styl")
    .pipe(plumber())
    .pipe(
      stylus({
        compress: true
      })
    )
    .pipe(autoprefixer({ browsers: ["last 2 versions"] }))
    .pipe(gulp.dest("../admin/css"))
    .pipe(bs.reload({ stream: true }))
})

gulp.task("watch", function() {
  gulp.watch("./stylus/**/*.styl", ["stylus-admin-css"])
})

// gulp.task("stylus-public-css", function() {
//   return gulp
//     .src("./stylus/gutenberg-blocks-public.styl")
//     .pipe(plumber())
//     .pipe(
//       stylus({
//         compress: true
//       })
//     )
//     .pipe(autoprefixer({ browsers: ["last 2 versions"] }))
//     .pipe(gulp.dest("../public/css"))
//     .pipe(bs.reload({ stream: true }))
// })


// gulp.task("browser-sync", function() {
//   bs.init({
//     proxy: "http://gutenblock.local",
//     ghostMode: false,
//     open: false,
//     notify: false
//   })
// })
