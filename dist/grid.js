var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, inject, BindingEngine, customElement, processContent, TargetInstruction } from 'aurelia-framework';
import { ViewCompiler, ViewResources, Container } from 'aurelia-framework';
import { GridSelection } from './grid-selection';
import { GridBuilder } from './grid-builder';
import { GridIcons } from './grid-icons';
import { GridParser } from './grid-parser';
import * as D from './grid-source';
import { LocalGridData } from './grid-local-source';
import { DelegateGridData } from './grid-delegate-source';
var Grid = (function () {
    function Grid(element, vc, vr, container, targetInstruction, bindingEngine) {
        // Columns
        this.columnsShowHeaders = true;
        this.columnsCanSort = true;
        this.columnsCanFilter = false;
        this.sourceAutoLoad = true;
        this.sourceLoadingMessage = "Loading ...";
        // Potential overrides (might not apply!!!) as some sources have their own definition of supports
        // these only really work for the delegate and remote sources
        this.sourceSupportsPagination = false;
        this.sourceSupportsSorting = false;
        this.sourceSupportsMultiColumnSorting = false;
        this.unbinding = false;
        this.pageSize = 25;
        this.element = element;
        this.viewCompiler = vc;
        this.viewResources = vr;
        this.container = container;
        this.bindingEngine = bindingEngine;
        this.template = (targetInstruction.behaviorInstructions[0]);
        this.pager = this.template.pager;
        this.pager.grid = this;
        this.selection = new GridSelection(this);
        this.builder = new GridBuilder(this, this.element);
    }
    Grid.prototype.bind = function (bindingContext) {
        this["$parent"] = bindingContext;
        // todo - make glyphicons and fa icons classes
        this.icons = new GridIcons();
        switch (this.sourceType) {
            case "remote": {
                // todo:
                throw new Error("Remote data source not supported");
            }
            case "delegate": {
                this.source = new DelegateGridData(this);
                break;
            }
            default: {
                // local
                this.source = new LocalGridData(this);
                break;
            }
        }
        this.builder.build();
    };
    Grid.prototype.unbind = function () {
        this.unbinding = true;
        this.builder.unbind();
        this.source.unbind();
    };
    Grid.prototype.attached = function () {
        this.gridHeightChanged();
        this.pager.refresh();
        // fix pageSize
        this.pageSize = this.pager.pageSizes[0];
        this.source.pageSize = this.pageSize;
        this.source.attached();
    };
    /* ==== Visual Handling ===== */
    Grid.prototype.gridHeightChanged = function () {
        if (this.gridHeight > 0) {
            this.gridContainer.setAttribute("style", "height:" + this.gridHeight + "px");
        }
        else {
            this.gridContainer.removeAttribute("style");
        }
    };
    Grid.prototype.refresh = function () {
        this.source.refresh();
    };
    Grid.prototype.pageSizeChanged = function (newValue, oldValue) {
        if (this.source.pageSize == this.pageSize)
            return;
        this.source.pageSize = newValue;
        this.source.refresh();
    };
    Object.defineProperty(Grid.prototype, "gridContainer", {
        get: function () {
            this._gridContainer = this._gridContainer || this.element.querySelector("tbody");
            return this._gridContainer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "gridHeaders", {
        get: function () {
            if (!this._gridHeaders)
                this._gridHeaders = this.element.querySelectorAll("table>thead>tr:first-child>th");
            return this._gridHeaders;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "gridFilters", {
        get: function () {
            if (!this._gridFilters)
                this._gridFilters = this.element.querySelectorAll("table>thead>tr:last-child>th");
            return this._gridFilters;
        },
        enumerable: true,
        configurable: true
    });
    return Grid;
}());
__decorate([
    bindable,
    __metadata("design:type", Boolean)
], Grid.prototype, "columnsShowHeaders", void 0);
__decorate([
    bindable,
    __metadata("design:type", Boolean)
], Grid.prototype, "columnsCanSort", void 0);
__decorate([
    bindable,
    __metadata("design:type", Boolean)
], Grid.prototype, "columnsCanFilter", void 0);
__decorate([
    bindable,
    __metadata("design:type", Number)
], Grid.prototype, "gridHeight", void 0);
__decorate([
    bindable,
    __metadata("design:type", GridIcons)
], Grid.prototype, "icons", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], Grid.prototype, "selectedItem", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], Grid.prototype, "source", void 0);
__decorate([
    bindable,
    __metadata("design:type", Boolean)
], Grid.prototype, "sourceAutoLoad", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], Grid.prototype, "sourceType", void 0);
__decorate([
    bindable,
    __metadata("design:type", Function)
], Grid.prototype, "sourceRead", void 0);
__decorate([
    bindable,
    __metadata("design:type", Function)
], Grid.prototype, "sourceTransform", void 0);
__decorate([
    bindable,
    __metadata("design:type", Function)
], Grid.prototype, "sourceReadError", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], Grid.prototype, "sourceLoadingMessage", void 0);
__decorate([
    bindable,
    __metadata("design:type", Boolean)
], Grid.prototype, "sourceSupportsPagination", void 0);
__decorate([
    bindable,
    __metadata("design:type", Boolean)
], Grid.prototype, "sourceSupportsSorting", void 0);
__decorate([
    bindable,
    __metadata("design:type", Boolean)
], Grid.prototype, "sourceSupportsMultiColumnSorting", void 0);
__decorate([
    bindable,
    __metadata("design:type", Number)
], Grid.prototype, "pageSize", void 0);
Grid = __decorate([
    customElement('grid'),
    processContent(function (viewCompiler, viewResources, element, instruction) {
        var result = processUserTemplate(element);
        instruction.columns = result.columns;
        instruction.rowAttributes = result.rowAttributes;
        instruction.pager = result.pager;
        return true;
    }),
    inject(Element, ViewCompiler, ViewResources, Container, TargetInstruction, BindingEngine),
    __metadata("design:paramtypes", [Element, ViewCompiler, ViewResources, Container, TargetInstruction, BindingEngine])
], Grid);
export { Grid };
function processUserTemplate(element) {
    var parser = new GridParser();
    return parser.parse(element);
}
