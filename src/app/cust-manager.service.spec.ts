import { TestBed, inject } from '@angular/core/testing';

import { CustManagerService } from './cust-manager.service';

describe('CustManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustManagerService]
    });
  });

  it('should be created', inject([CustManagerService], (service: CustManagerService) => {
    expect(service).toBeTruthy();
  }));
});
