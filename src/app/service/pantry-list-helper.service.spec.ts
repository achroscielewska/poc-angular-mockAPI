import { TestBed } from '@angular/core/testing';

import { PantryListHelperService } from './pantry-list-helper.service';

describe('PantryListHelperService', () => {
  let service: PantryListHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PantryListHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
