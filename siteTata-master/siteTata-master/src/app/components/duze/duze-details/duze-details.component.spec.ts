import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuzeDetailsComponent } from './duze-details.component';

describe('DuzeDetailsComponent', () => {
  let component: DuzeDetailsComponent;
  let fixture: ComponentFixture<DuzeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuzeDetailsComponent]
    });
    fixture = TestBed.createComponent(DuzeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
