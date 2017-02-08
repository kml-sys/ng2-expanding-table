import { Compiler, ComponentRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
export declare class NgTableRowComponent {
    private componentFactoryResolver;
    private compiler;
    private cdRef;
    rowTarget: any;
    rowComponent: any;
    cmpRef: ComponentRef<any>;
    private isViewInitialized;
    constructor(componentFactoryResolver: ComponentFactoryResolver, compiler: Compiler, cdRef: ChangeDetectorRef);
    updateComponent(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
