define(["require", "exports"], function (require, exports) {
    "use strict";
    /** All Attributes on <grid-col  */
    var GridColumn = (function () {
        function GridColumn() {
        }
        GridColumn.prototype.init = function () {
            // we can accept the field to be null if the column has no sorting enabled
            if (this.canSort) {
                if (!this.field) {
                    throw new Error("field is required for column " + this.heading + " if the column is sortable.");
                }
            }
            if (this.canFilter && !this.filterPlaceholder)
                this.filterPlaceholder = "filter...";
        };
        return GridColumn;
    }());
    exports.GridColumn = GridColumn;
});
