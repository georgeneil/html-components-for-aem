(function () {
    'use strict';
    var SingleDropDown = function (element) {
        this.initialize = initialize;
        this.attachEvents = attachEvents;
        this.toggleDropDown = toggleDropDown;
        this.onSelectItem = onSelectItem;

        this.initialize();

        function initialize() {
            this.name = 'SingleDropDown';
            this.elm = element;
            this.header = this.elm.querySelector('.dropdown-header');
            this.headerLabelSelected = this.header.querySelector('.dropdown-selected');
            this.contents = this.elm.querySelector('.dropdown-content');
            this.items = this.contents.querySelectorAll('.dropdown-item');

            this.attachEvents();
        };

        function attachEvents() {
            var _this = this;

            this.header.addEventListener('click', function () {
                _this.toggleDropDown();
            }, false);

            // Single Drop Down Items
            var itemCount = this.items.length;
            var item;
            for (var i = 0; i < itemCount; ++i) {
                item = this.items[i];
                item.index = i;
                item.addEventListener('click', function (event) {
                    _this.onSelectItem(event, this);
                }, false);
            }
        };

        function toggleDropDown() {
            this.elm.classList.toggle('open');
            this.elm.classList.toggle('bs-depth-3');
        };

        function onSelectItem(event, element) {
            var index = element.index;
            var itemText = element.innerHTML;
            var itemSelected = this.contents.querySelector('.dropdown-item.selected');

            this.headerLabelSelected.innerHTML = itemText.trim();
            if (itemSelected) {
                itemSelected.classList.remove('selected');
            }
            element.classList.add('selected');

            this.toggleDropDown();
        };
    };
    window.def = window.def || {};
    def.SingleDropDown = SingleDropDown;
})();