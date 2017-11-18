import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotebookModule } from './notebook/notebook.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotebookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
