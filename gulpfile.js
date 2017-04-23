var gulp = require('gulp');

var paths = {
    src: ['src/**/*.js'],
    spec: 'specs/**/*.spec.js',
    build: ' TODO '
}

/*
 *
 * Test
 *
 */
var jasmine = new require('gulp-jasmine-livereload-task');


gulp.task('default', function() {
    gulp.run(jasmine({
        files: [
            'src/utils/indexed-db/indexed-db.js',
            'src/utils/indexed-db/*.js',
        	'src/utils/**/*.js',
        	'src/consensus/primitive/Primitive.js',
        	'src/consensus/primitive/*.js',
            'src/consensus/account/*.js',
            'src/consensus/block/BlockBody.js',
            'src/consensus/block/BlockHeader.js',
            'src/consensus/block/*.js',
            'src/*/**/*.js',
        	'src/*.js',
        	'specs/**/*.spec.js']
    }));
});

// gulp.task('watch', function() {
//     gulp.run('build');
//     gulp.watch(paths.src, ['build']);
// });

// gulp.task('test-build', ['watch'], function() {
//     gulp.run(jasmine({
//         files: [paths.build, paths.test]
//     }));
// });
