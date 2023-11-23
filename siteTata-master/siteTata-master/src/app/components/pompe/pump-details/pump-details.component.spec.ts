import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpDetailsComponent } from './pump-details.component';

describe('PumpDetailsComponent', () => {
  let component: PumpDetailsComponent;
  let fixture: ComponentFixture<PumpDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PumpDetailsComponent]
    });
    fixture = TestBed.createComponent(PumpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
