import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadExamsModalComponent } from './upload-exams-modal.component';

describe('UploadExamsModalComponent', () => {
  let component: UploadExamsModalComponent;
  let fixture: ComponentFixture<UploadExamsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadExamsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadExamsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
