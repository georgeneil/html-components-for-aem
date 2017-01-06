(function () {
    'use strict';
    var Main = function (element) {
        this.init = init;

        this.init();

        function init() {
            this.name = 'Main';

            this.dd1 = document.querySelector('#dd-1 .ss-dropdown');
            new def.SingleDropDown(this.dd1);
        };

    };
    window.def = window.def || {};
    def.Main = Main;
})();

(function () {
    window.obj = window.obj || {};
    var _initialize = function () {

        if (!obj.main) {
            obj.main = new def.Main();
        }
    };

    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', _initialize(), false);
    } else {
        // IE and Older browsers need to be handled here
    }
})();