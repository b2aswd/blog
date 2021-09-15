import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { B2aTableModule } from '../libs/b2a-table/b2a-table.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, B2aTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
