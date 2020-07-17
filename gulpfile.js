let project_folder = "dist";
let source_folder = "src";
let path = {
    build: {
        html: project_folder + '/',
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        img: project_folder + '/img/',
        fonts: project_folder + '/fonts/'
    },
    src: {
        html: source_folder + '/*.pug',
        css: source_folder + '/assets/sass/styles.sass',
        js: source_folder + '/assets/js/scripts.js',
        img: source_folder + '/assets/img/**/*.{jpg,png,svg,ico,webp,gif}',
        fonts: source_folder + '/assets/fonts/'
    },
    watch: {
        html: source_folder + '/**/*.pug',
        css: source_folder + '/assets/sass/**/*.sass',
        js: source_folder + '/assets/js/**/*.js',
        img: source_folder + '/assets/img/**/*.{jpg,png,svg,ico,webp,gif}'
    },
    clean: "./" + project_folder + "/"
}

let { src, dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    group_media = require('gulp-group-css-media-queries'),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    pug = require('gulp-pug')
    sassGlob = require('gulp-sass-glob');

function browserSync(params){
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/",
        },
        port: 3000,
        notify: false
    })
}
function html(){
    return src(path.src.html)
    .pipe(
        pug({
            pretty: true
        })
    )
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css(params){
    return src(path.src.css)
    .pipe(sassGlob())
    .pipe(
        sass({
            outputStyle: 'expanded'
        })
    )
    .pipe(group_media())
    .pipe (autoprefixer())
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
        rename({
            extname: ".min.css"
        })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}
function js(){
    return src(path.src.js)
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}
function images(){
    return src(path.src.img)
      .pipe(
          imagemin({
            progressive: true,
            svgoPlugins:[{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3
          })
      )
      .pipe(dest(path.build.img))
      .pipe(browsersync.stream())
}

function watchfiles(params){
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.js], js)
    gulp.watch([path.watch.img], images)
}

let build = gulp.series( gulp.parallel(html, css, js, images));
let watch = gulp.parallel(build, watchfiles, browserSync );



exports.images = images;
exports.css = css;
exports.js = js;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch; 


