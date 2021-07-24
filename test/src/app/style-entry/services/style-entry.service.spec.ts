import { TestBed } from '@angular/core/testing';

import { StyleEntryService } from './style-entry.service';

describe('StyleEntryService', () => {
  let service: StyleEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
