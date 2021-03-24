import { Component } from '@angular/core';

@Component({
    selector: 'b2a-table',
    host: {
        class: 'b2a-table',
    },
    template: `
        <ng-content select="b2a-table-header"></ng-content>
        <div class="b2a-table__row-group">
            <ng-content select="b2a-table-row"></ng-content>
        </div>
    `,
})
export class B2aTableComponent {}
