"use strict";
var core_1 = require('@angular/core');
var NgTableRowComponent = (function () {
    function NgTableRowComponent(componentFactoryResolver, compiler, cdRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.compiler = compiler;
        this.cdRef = cdRef;
        this.isViewInitialized = false;
    }
    NgTableRowComponent.prototype.updateComponent = function () {
        if (!this.isViewInitialized) {
            return;
        }
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        var factory = this.componentFactoryResolver.resolveComponentFactory(this.rowComponent);
        this.cmpRef = this.rowTarget.createComponent(factory);
        this.cdRef.detectChanges();
    };
    NgTableRowComponent.prototype.ngOnChanges = function () {
        this.updateComponent();
    };
    NgTableRowComponent.prototype.ngAfterViewInit = function () {
        this.isViewInitialized = true;
        this.updateComponent();
    };
    NgTableRowComponent.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    };
    NgTableRowComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-table-row',
                    template: "<div #rowTarget></div>"
                },] },
    ];
    /** @nocollapse */
    NgTableRowComponent.ctorParameters = [
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.Compiler, },
        { type: core_1.ChangeDetectorRef, },
    ];
    NgTableRowComponent.propDecorators = {
        'rowTarget': [{ type: core_1.ViewChild, args: ['rowTarget', { read: core_1.ViewContainerRef },] },],
        'rowComponent': [{ type: core_1.Input },],
    };
    return NgTableRowComponent;
}());
exports.NgTableRowComponent = NgTableRowComponent;
