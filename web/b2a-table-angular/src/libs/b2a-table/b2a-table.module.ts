import { NgModule } from '@angular/core';
import { B2aTableComponent } from './b2a-table/b2a-table.component';
import { B2aTableCellComponent } from './b2a-table-cell/b2a-table-cell.component';
import { B2aTableCellExpandComponent } from './b2a-table-cell-expand/b2a-table-cell-expand.component';
import { B2aTableHeaderComponent } from './b2a-table-header/b2a-table-header.component';
import { B2aTableRowComponent } from './b2a-table-row/b2a-table-row.component';

@NgModule({
    imports: [],
    exports: [
        B2aTableComponent,
        B2aTableCellComponent,
        B2aTableCellExpandComponent,
        B2aTableHeaderComponent,
        B2aTableRowComponent,
    ],
    declarations: [
        B2aTableComponent,
        B2aTableCellComponent,
        B2aTableCellExpandComponent,
        B2aTableHeaderComponent,
        B2aTableRowComponent,
    ],
})
export class B2aTableModule {}
