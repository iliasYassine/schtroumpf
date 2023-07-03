import { TestBed } from '@angular/core/testing';

import { SchtroumfService } from './schtroumf.service';

describe('SchtroumfService', () => {
  let service: SchtroumfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchtroumfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
