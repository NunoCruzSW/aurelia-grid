var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./grid-source"], function (require, exports, grid_source_1) {
    "use strict";
    /** Remote Source of Grid Data via a function */
    var DelegateGridData = (function (_super) {
        __extends(DelegateGridData, _super);
        function DelegateGridData(grid) {
            var _this = _super.call(this, grid) || this;
            _this.dataRead = grid.sourceRead;
            if (!_this.dataRead) {
                throw new Error("'data-read.call' is not defined on the grid.");
            }
            _this.supportsPagination = _this.grid.sourceSupportsPagination;
            _this.supportsSorting = _this.grid.sourceSupportsSorting;
            _this.supportsMultiColumnSorting = _this.grid.sourceSupportsMultiColumnSorting;
            return _this;
        }
        DelegateGridData.prototype.refresh = function () {
            var _this = this;
            this.loading = true;
            var sort = this.sorting.map(function (s) {
                return { field: s.field, sorting: s.sorting };
            });
            var d = this.dataRead({
                page: this.page,
                pageSize: this.pageSize,
                sort: sort
            });
            if (d.then) {
                d.then(function (result) {
                    _this.handleResult(result);
                    _this.loading = false;
                }).catch(function (error) {
                    if (_this.grid.sourceReadError)
                        _this.grid.sourceReadError(error);
                    _this.loading = false;
                });
            }
            else {
                if (Array.isArray(d)) {
                    this.handleResult(d, true);
                    this.loading = false;
                }
                else {
                    this.handleResult(d, false);
                    this.loading = false;
                }
            }
            ;
        };
        DelegateGridData.prototype.handleResult = function (result, isArray) {
            if (isArray === void 0) { isArray = false; }
            var r;
            if (this.grid.sourceTransform)
                r = this.grid.sourceTransform(result);
            else {
                if (isArray) {
                    r = { data: result, count: result.length };
                }
                else {
                    r = result;
                }
            }
            if (r) {
                this.count = r.count;
                this.items = r.data;
            }
            this.onData();
        };
        return DelegateGridData;
    }(grid_source_1.GridDataSource));
    exports.DelegateGridData = DelegateGridData;
});
