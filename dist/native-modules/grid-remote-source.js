var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { GridDataSource } from './grid-source';
/** Remote Source of Grid Data - Server side Paging and Sorting */
var RemoteGridData = (function (_super) {
    __extends(RemoteGridData, _super);
    function RemoteGridData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RemoteGridData;
}(GridDataSource));
export { RemoteGridData };
