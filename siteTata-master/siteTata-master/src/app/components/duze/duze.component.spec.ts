import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuzeComponent } from './duze.component';

describe('DuzeComponent', () => {
  let component: DuzeComponent;
  let fixture: ComponentFixture<DuzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuzeComponent]
    });
    fixture = TestBed.createComponent(DuzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
