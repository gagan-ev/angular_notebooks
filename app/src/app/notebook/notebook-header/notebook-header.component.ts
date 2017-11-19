import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nb-notebook-header',
  templateUrl: './notebook-header.component.html',
  styleUrls: ['./notebook-header.component.scss']
})
export class NotebookHeaderComponent implements OnInit {
  menuOptions: any[] = [
    'File', 'Edit', 'Insert', 'Cell', 'Help'
  ];
  toolbarOptions: any[] = [
  ]

  constructor() { }

  ngOnInit() {
  }

}
