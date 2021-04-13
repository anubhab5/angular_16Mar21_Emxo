import { TestBed } from '@angular/core/testing';

import { MySvcService } from './my-svc.service';

describe('MySvcService', () => {
  let service: MySvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
