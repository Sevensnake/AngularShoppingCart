import { TestBed } from '@angular/core/testing';

import { HardwaretoolsService } from './hardwaretools.service';

describe('HardwaretoolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardwaretoolsService = TestBed.get(HardwaretoolsService);
    expect(service).toBeTruthy();
  });
});
