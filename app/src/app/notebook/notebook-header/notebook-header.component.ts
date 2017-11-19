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
    'save',
    'add',
    'content_cut',
    'content_copy',
    'content_paste',
    'arrow_upward',
    'arrow_downward',
    'skip_next',
    'refresh'
  ]

  constructor() { }

  ngOnInit() {
  }

}
