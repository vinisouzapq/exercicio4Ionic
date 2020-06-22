import { TestBed } from '@angular/core/testing';

import { SintomassaudeService } from './sintomassaude.service';

describe('SintomassaudeService', () => {
  let service: SintomassaudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SintomassaudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
