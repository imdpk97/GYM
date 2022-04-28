import { TestBed } from '@angular/core/testing';

import { GymplanService } from './gymplan.service';

describe('GymplanService', () => {
  let service: GymplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
