import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'b2a-table-row',
    host: {
        class: 'b2a-table__row',
    },
    template: `
        <div class="b2a-table__cell-group">
            <ng-content></ng-content>
        </div>
        <ng-content select="b2a-table"></ng-content>
    `,
})
export class B2aTableRowComponent {}
