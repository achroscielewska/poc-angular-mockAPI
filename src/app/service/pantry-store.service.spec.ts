import { TestBed } from '@angular/core/testing';

import { PantryStoreService } from './pantry-store.service';
import { HttpClientModule } from '@angular/common/http';

describe('PantryStoreService', () => {
  let service: PantryStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PantryStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
