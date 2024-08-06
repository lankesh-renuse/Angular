import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCompComponent } from './pipe-comp.component';

describe('PipeCompComponent', () => {
  let component: PipeCompComponent;
  let fixture: ComponentFixture<PipeCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeCompComponent]
    });
    fixture = TestBed.createComponent(PipeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
