import { Component } from '@angular/core';

@Component({
    selector: 'b2a-table-cell-expand',
    host: {
        class: 'b2a-table__cell--expand',
    },
    template: `
        <ng-content></ng-content>
    `,
})
export class B2aTableCellExpandComponent {}
