import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotebookComponent } from './notebook.component';
import { NotebookHeaderComponent } from './notebook-header/notebook-header.component';


@NgModule({
  declarations: [
    NotebookComponent,
    NotebookHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NotebookComponent
  ],
  providers: [ ]
})
export class NotebookModule {
}
