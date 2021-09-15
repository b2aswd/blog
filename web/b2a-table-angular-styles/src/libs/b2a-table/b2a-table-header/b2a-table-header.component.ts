import { Component } from '@angular/core';

@Component({
    selector: 'b2a-table-header',
    host: {
        class: 'b2a-table__header',
    },
    template: `
        <ng-content></ng-content>
    `,
})
export class B2aTableHeaderComponent {}
