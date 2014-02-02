module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),
        concat: {
            options: {
                stripBanners: false, // no comments are stripped
                separator: '\n'
            },
            game: {
                // Assemble different game objects
                src: [
                    "js/game/copyright.js",
                    "js/game/Doa.js",
                    "js/game/Storage.js",
                    "js/game/Controller.js"
                ],
                dest: 'js/Game.js'
            }
        },
        jshint: {
            options: {
                laxbreak: true
            },
            all: [ 'js/game/*.js' ]
        },
        connect: {
            server: {
                options: {
                    port: 8888,
                    hostname: 'localhost',
                    base: '.',
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask( 'default', [ 'concat', 'connect' ] );
    grunt.registerTask( 'dist', [ 'concat', 'jshint', 'connect' ] );
    grunt.registerTask( 'build', [ 'concat', 'jshint' ] );
    grunt.registerTask( 'server', [ 'connect' ] );
};
