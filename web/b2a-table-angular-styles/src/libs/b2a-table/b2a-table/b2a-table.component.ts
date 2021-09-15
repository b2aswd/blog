import { Component, ViewEncapsulation } from '@angular/core';

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
  styleUrls: ['./../styles/b2a-table.scss'],
  encapsulation: ViewEncapsulation.None,
  // styles: [
  //   `
  //     ::ng-deep {
  //       @import './../styles/b2a-table.scss';
  //     }
  //   `,
  // ],
})
export class B2aTableComponent {}
