import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionRecordComponent } from './admission-record.component';

describe('AdmissionRecordComponent', () => {
  let component: AdmissionRecordComponent;
  let fixture: ComponentFixture<AdmissionRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmissionRecordComponent]
    });
    fixture = TestBed.createComponent(AdmissionRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
