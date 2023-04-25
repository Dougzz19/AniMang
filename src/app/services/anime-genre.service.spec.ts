import { TestBed } from '@angular/core/testing';

import { AnimeGenreService } from './anime-genre.service';

describe('AnimeGenreService', () => {
  let service: AnimeGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
