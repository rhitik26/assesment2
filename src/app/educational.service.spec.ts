import { TestBed } from '@angular/core/testing';

import { EducationalService } from './educational.service';

describe('EducationalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducationalService = TestBed.get(EducationalService);
    expect(service).toBeTruthy();
  });
});
