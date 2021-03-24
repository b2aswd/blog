import { AfterContentInit, Component, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { B2aTableCellComponent } from '../b2a-table-cell/b2a-table-cell.component';

@Component({
    selector: 'b2a-table-header',
    host: {
        class: 'b2a-table__header',
    },
    template: `
        <ng-content></ng-content>
    `,
})
export class B2aTableHeaderComponent implements AfterContentInit {
    @ContentChildren(B2aTableCellComponent) tableCell: QueryList<B2aTableCellComponent>;

    padding = null;

    constructor(private elRef: ElementRef<HTMLElement>) {}

    ngAfterContentInit() {
        const computedEl = window.getComputedStyle(this.elRef.nativeElement);
        this.padding = computedEl.paddingLeft;
    }
}
