import { TestBed, inject } from '@angular/core/testing';
import { LoginGuard } from './login-guard.service';

describe('Service: LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuard]
    });
  });

  it('should ...', inject([LoginGuard], (service: LoginGuard) => {
    expect(service).toBeTruthy();
  }));
});
