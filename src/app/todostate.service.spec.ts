import { TestBed } from '@angular/core/testing';

import { TodostateService } from './todostate.service';

describe('TodostateService', () => {
  let service: TodostateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodostateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
