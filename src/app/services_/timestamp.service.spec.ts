import { TestBed } from '@angular/core/testing';

import { TimestampService } from './timestamp.service';

describe('TimestampService', () => {
  let service: TimestampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimestampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
