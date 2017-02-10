define(["require", "exports"], function (require, exports) {
    "use strict";
    var GridIcons = (function () {
        function GridIcons() {
            this.sortingDesc = "glyphicon glyphicon-triangle-top text-primary";
            this.sortingAsc = "glyphicon glyphicon-triangle-bottom text-primary";
            this.removeFilter = "glyphicon glyphicon-search text-muted";
        }
        return GridIcons;
    }());
    exports.GridIcons = GridIcons;
});
