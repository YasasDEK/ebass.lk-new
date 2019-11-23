import { TestBed } from '@angular/core/testing';

import { ShopsAndCompaniesService } from './shops-and-companies.service';

describe('ShopsAndCompaniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopsAndCompaniesService = TestBed.get(ShopsAndCompaniesService);
    expect(service).toBeTruthy();
  });
});
