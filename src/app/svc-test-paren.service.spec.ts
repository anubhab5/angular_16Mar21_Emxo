import { TestBed } from '@angular/core/testing';

import { SvcTestParenService } from './svc-test-paren.service';

describe('SvcTestParenService', () => {
  let service: SvcTestParenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvcTestParenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
