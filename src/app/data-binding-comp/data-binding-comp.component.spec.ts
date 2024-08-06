import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingCompComponent } from './data-binding-comp.component';

describe('DataBindingCompComponent', () => {
  let component: DataBindingCompComponent;
  let fixture: ComponentFixture<DataBindingCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingCompComponent]
    });
    fixture = TestBed.createComponent(DataBindingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
