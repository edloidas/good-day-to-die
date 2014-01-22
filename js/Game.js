/**
 * EDLOIDAS DEVPAGE
 * ANGULAR.JS CONTROLLERS
 *
 * @author edloidas
 * @link edloidas@gmail.com
 */

function GameController( $scope, $http ) {
    $scope.meta = {
        franchise: "Dawn of Aegis",
        name: "A Good Day To Die",
        size: "normal",
        theme: "light",
        display: "menu",
        version: "0.1"
    };

    $scope.menu = [
        { name: 'New Game', id: 'newgame' },
        { name: 'Settings', id: 'settings' },
        { name: 'Save', id: 'save' },
        { name: 'Load', id: 'load' },
        { name: 'Credits', id: 'credits' }
    ];

    $scope.submenu = {
        title: "",
        table: true,
        settings: {
            size: [ "normal", "big", "auto" ],
            theme: [ "light", "dark" ]
        },
        load: [ // max 5 slots
            { data: "", date: "empty" },
            { data: "", date: "empty" },
            { data: "", date: "empty" },
            { data: "", date: "empty" },
            { data: "", date: "empty" }
        ],
        save: [ // max 5 slots
            { data: "", date: "empty" },
            { data: "", date: "empty" },
            { data: "", date: "empty" },
            { data: "", date: "empty" },
            { data: "", date: "empty" }
        ],
        credits: [
            { name: "Programming", values: [ "edloidas" ] },
            { name: "Story", values: [ "edloidas", "Nartien" ] },
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
            newgame();
        }
    };

    $scope.backToMenu = function () {
        $scope.meta.display = 'menu';
    };

    var newgame = function () {

    };

    /*
     * Menu methods
     */
    var load = function ( slot ) {

    };

    var save = function ( slot ) {

    };

    $scope.saveSettings = function () {
        try {
            localStorage.gdtdSettings = JSON.stringify({ size: $scope.meta.size,
                                                         theme: $scope.meta.theme });
        } catch ( e ) {
            console.warn( e );
        }
    };

    var loadSettings = function () {
        try {
            // not undefined or null
            if ( localStorage.gdtdSettings != undefined ) {
                var settings = JSON.parse( localStorage.gdtdSettings );
                $scope.meta.size = settings.size || $scope.meta.size;
                $scope.meta.theme = settings.theme || $scope.meta.theme;
            }
        } catch ( e ) {
            console.warn( e );
        }
    }

    /*
     * Post processing
     */
    loadSettings();
};

function formatDate( date ) {
    date = date || new Date();
    return date.getFullYear() + '-' +
           date.getMonth() + 1 + '-' +
           date.getDate() + ' ' +
           date.getHours() + ':' +
           date.getMinutes();
}
