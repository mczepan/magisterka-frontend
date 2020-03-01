import { TestBed } from '@angular/core/testing';

import { BaskteballService } from './baskteball.service';

describe('BaskteballService', () => {
  let service: BaskteballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaskteballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
