import { TestBed } from '@angular/core/testing';

import { WarframeApiService } from './warframe-api.service';

describe('WarframeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WarframeApiService = TestBed.get(WarframeApiService);
    expect(service).toBeTruthy();
  });
});
