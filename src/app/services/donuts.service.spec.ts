import { TestBed } from '@angular/core/testing';

import { DonutsServiceService } from './donuts.service';

describe('DonutsServiceService', () => {
  let service: DonutsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
