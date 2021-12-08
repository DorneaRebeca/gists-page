import { TestBed } from '@angular/core/testing';

import { GistsApiService } from './gists-api.service';

describe('GistsApiService', () => {
  let service: GistsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GistsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
