import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { B2aTableModule } from '../libs/b2a-table/b2a-table.module';
import { TableComponentComponent } from './table-components/table-components.component';
import { TableHtmlElementsComponent } from './table-html-elements/table-html-elements.component';

@NgModule({
    declarations: [AppComponent, TableComponentComponent, TableHtmlElementsComponent],
    imports: [BrowserModule, B2aTableModule],
    bootstrap: [AppComponent],
    exports: [TableComponentComponent, TableHtmlElementsComponent],
})
export class AppModule {}
