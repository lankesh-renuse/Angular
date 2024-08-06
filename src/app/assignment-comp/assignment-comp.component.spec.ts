import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCompComponent } from './assignment-comp.component';

describe('AssignmentCompComponent', () => {
  let component: AssignmentCompComponent;
  let fixture: ComponentFixture<AssignmentCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentCompComponent]
    });
    fixture = TestBed.createComponent(AssignmentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
