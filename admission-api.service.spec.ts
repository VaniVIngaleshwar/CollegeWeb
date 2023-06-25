import { TestBed } from '@angular/core/testing';

import { AdmissionApiService } from './admission-api.service';

describe('AdmissionApiService', () => {
  let service: AdmissionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
