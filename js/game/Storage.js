/*
===============================================================================

    Class defines methods to work with localStorage and game saves.

===============================================================================
*/
function Storage() {
    if ( !(this instanceof Storage) ) return new Storage();

    this.settings = {
        size: "normal",
        theme: "light",
        fullscreen: false
    };

    this.saveSettings = function () {
        try {
            localStorage.gdtdSettings = JSON.stringify( this.settings );
        } catch ( e ) {
            console.warn( e );
        }
    };

    this.loadSettings = function () {
        try {
            if ( localStorage.gdtdSettings !== undefined ) {
                var stored = JSON.parse( localStorage.gdtdSettings );
                this.settings.size = stored.size || this.settings.size;
                this.settings.theme = stored.theme || this.settings.theme;
            }
        } catch ( e ) {
            console.warn( e );
        }
    };
}

DOA.Storage = new Storage();
