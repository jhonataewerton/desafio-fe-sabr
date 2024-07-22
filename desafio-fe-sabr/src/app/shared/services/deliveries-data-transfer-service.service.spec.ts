import { TestBed } from '@angular/core/testing';

import { DeliveriesDataTransferServiceService } from './deliveries-data-transfer-service.service';

describe('DeliveriesDataTransferServiceService', () => {
  let service: DeliveriesDataTransferServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveriesDataTransferServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
