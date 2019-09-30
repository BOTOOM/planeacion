import { TestBed } from '@angular/core/testing';

import { LocaljsonService } from './localjson.service';

describe('LocaljsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocaljsonService = TestBed.get(LocaljsonService);
    expect(service).toBeTruthy();
  });
});
