import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PistoaleComponent } from './pistoale.component';

describe('PistoaleComponent', () => {
  let component: PistoaleComponent;
  let fixture: ComponentFixture<PistoaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PistoaleComponent]
    });
    fixture = TestBed.createComponent(PistoaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
