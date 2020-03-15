import { TestBed } from '@angular/core/testing';

import { PantryService } from './pantry.service';
import { HttpClientModule } from '@angular/common/http';

describe('PantryService', () => {
  let service: PantryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PantryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
