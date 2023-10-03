import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSlotFormComponent } from './appointment-slot-form.component';

describe('AppointmentSlotFormComponent', () => {
  let component: AppointmentSlotFormComponent;
  let fixture: ComponentFixture<AppointmentSlotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentSlotFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSlotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
