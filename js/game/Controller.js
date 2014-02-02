/*
===============================================================================

    Game Controller.

===============================================================================
*/
function GameController( $scope, $http ) {
    $scope.meta = {
        franchise: "Dawn of Aegis",
        name: "A Good Day To Die",
        display: "menu",
        status: "waiting",
        version: "0.0.1"
    };

    $scope.settings = DOA.Storage.settings;

    $scope.menu = [
        { name: 'New Game', id: 'newgame' },
        { name: 'Continue', id: 'continue' },
        { name: 'Episodes', id: 'episodes' },
        { name: 'Settings', id: 'settings' },
        { name: 'Credits', id: 'credits' }
    ];

    $scope.submenu = {
        title: "",
        table: true,
        settings: {
            size: [ "normal", "big", "auto" ],
            theme: [ "light", "dark" ]
        },
        credits: [
            { name: "Programming", values: [ "edloidas" ] },
            { name: "Interface", values: [ "edloidas" ] },
            { name: "Story", values: [ "Nartien", "edloidas" ] },
            { name: "Version", values: [ $scope.meta.version ] }
        ]
    };

    /*
     * Menu methods
     */
    $scope.runMenu = function ( index ) {
        $scope.submenu.title = $scope.menu[ index ].name;
        $scope.meta.display =  $scope.menu[ index ].id || 'menu';
        if ( $scope.meta.display === 'newgame' ) {
            newGame();
        }
    };

    $scope.backToMenu = function () {
        $scope.meta.display = 'menu';
    };

    $scope.toggleFullscreen = function () {
        if ( !document.fullscreenElement &&
             !document.mozFullscreenElement &&
             !document.mozFullScreenElement &&
             !document.webkitFullscreenElement ) {
            if ( document.documentElement.requestFullscreen ) {
                document.documentElement.requestFullscreen();
            } else if ( document.documentElement.mozRequestFullscreen ) {
                document.documentElement.mozRequestFullscreen();
            } else if ( document.documentElement.mozRequestFullScreen ) {
                document.documentElement.mozRequestFullScreen();
            } else if ( document.documentElement.webkitRequestFullscreen ) {
                document.documentElement.webkitRequestFullscreen( Element.ALLOW_KEYBOARD_INPUT );
            }
        } else {
            if ( document.exitFullscreen ) {
                document.exitFullscreen();
            } else if ( document.mozCancelFullscreen ) {
                document.mozCancelFullscreen();
            } else if ( document.mozCancelFullScreen ) {
                document.mozCancelFullScreen();
            } else if ( document.webkitExitFullscreen ) {
                document.webkitExitFullscreen();
            }
        }
    };

    function fullscreenChange() {
        // lock pointer only for manual fullscreen via 'x'
        if ( document.fullscreenElement === document.documentElement ||
             document.mozFullscreenElement === document.documentElement ||
             document.mozFullScreenElement === document.documentElement ||
             document.webkitFullscreenElement === document.documentElement ) {
            $scope.settings.fullscreen = document.mozFullScreen || document.webkitIsFullScreen || false;
        }
    }

    document.addEventListener( 'fullscreenchange',       fullscreenChange, false );
    document.addEventListener( 'mozfullscreenchange',    fullscreenChange, false );
    document.addEventListener( 'webkitfullscreenchange', fullscreenChange, false );

    var newGame = function () {
        try {
            $scope.meta.display = "continue";
            $scope.meta.status = "active";
        } catch ( e ) {
            $scope.meta.display = "menu";
        }
    };

    var continueGame = function () {
        // load last episode
    };

    $scope.saveSettings = DOA.Storage.saveSettings;

    /*
     * Post processing
     */
    DOA.Storage.loadSettings();
}

function formatDate( date ) {
    date = date || new Date();
    return date.getFullYear() + '-' +
           date.getMonth() + 1 + '-' +
           date.getDate() + ' ' +
           date.getHours() + ':' +
           date.getMinutes();
}

