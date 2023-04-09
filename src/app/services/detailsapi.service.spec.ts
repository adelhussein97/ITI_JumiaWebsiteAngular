import { TestBed } from '@angular/core/testing';

import { DetailsapiService } from './detailsapi.service';

describe('DetailsapiService', () => {
  let service: DetailsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
