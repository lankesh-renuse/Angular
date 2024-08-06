import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcomComponent } from './firstcom.component';

describe('FirstcomComponent', () => {
  let component: FirstcomComponent;
  let fixture: ComponentFixture<FirstcomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstcomComponent]
    });
    fixture = TestBed.createComponent(FirstcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
