import { TestBed } from '@angular/core/testing';

import { AccessRegistrationService } from './access-registration.service';

describe('AccessRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessRegistrationService = TestBed.get(AccessRegistrationService);
    expect(service).toBeTruthy();
  });
});
