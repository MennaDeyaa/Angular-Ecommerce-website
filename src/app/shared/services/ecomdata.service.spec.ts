import { TestBed } from '@angular/core/testing';

import { EcomdataService } from './ecomdata.service';

describe('EcomdataService', () => {
  let service: EcomdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcomdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
