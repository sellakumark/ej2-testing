require("@syncfusion/ej2-build");

var gulp = require('gulp');

gulp.task('start', ['compile-scripts'], function (done) {
    var browserSync = require('browser-sync');
    var bs = browserSync.create('Essential JS2');
    var options = {
        server: {
            baseDir: ['./'],
            directory: true
        },
        ui: false,
        open: true,
        notify: false
    };
    bs.init(options, done);

    /**
    * Watching TypeScript file changes to reload the page
    */
    gulp.watch(["./demos/**/*.ts"], ['compile-scripts', bs.reload]);
});

/**
 * Compile TypeScript to JavaScript
 */
gulp.task('compile-scripts', function (done) {
    var ts = require('gulp-typescript');
    var defaultConfig = { typescript: require('typescript') };
    var tsProject = ts.createProject('tsconfig.json', defaultConfig);
    gulp.src(['./demos/**/*.ts'], { base: '.' })
        .pipe(ts(tsProject))
        .pipe(gulp.dest('./'))
        .on('error', function (e) {
            done(e);
            process.exit(1);
        }).on('end', function () {
            done();
        });
});

/**
 * WebDriver for E2E Testing
 */
var webdriver_standalone = require('gulp-protractor').webdriver_standalone;
var webdriver_update = require('gulp-protractor').webdriver_update_specific;

gulp.task('e2e-webdriver-update', webdriver_update({ webdriverManagerArgs: ['--ie', '--edge'] }));

gulp.task('e2e-webdriver-start', webdriver_standalone);
