import { TestBed } from '@angular/core/testing';

import { RestFulDemoService } from './rest-ful-demo.service';

describe('RestFulDemoService', () => {
  let service: RestFulDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestFulDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
