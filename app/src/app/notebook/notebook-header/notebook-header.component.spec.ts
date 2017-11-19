import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookHeaderComponent } from './notebook-header.component';

describe('NotebookHeaderComponent', () => {
  let component: NotebookHeaderComponent;
  let fixture: ComponentFixture<NotebookHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
