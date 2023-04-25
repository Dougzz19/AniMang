import { TestBed } from '@angular/core/testing';

import { AnimeSeasonsService } from './anime-seasons.service';

describe('AnimeSeasonsService', () => {
  let service: AnimeSeasonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeSeasonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
