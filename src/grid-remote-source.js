var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./grid-source"], function (require, exports, grid_source_1) {
    "use strict";
    /** Remote Source of Grid Data - Server side Paging and Sorting */
    var RemoteGridData = (function (_super) {
        __extends(RemoteGridData, _super);
        function RemoteGridData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RemoteGridData;
    }(grid_source_1.GridDataSource));
    exports.RemoteGridData = RemoteGridData;
});
//# sourceMappingURL=grid-remote-source.js.map