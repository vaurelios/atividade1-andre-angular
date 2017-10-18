import { TestBed, inject } from '@angular/core/testing';

import { MenuProviderService } from './menu-provider.service';

describe('MenuProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuProviderService]
    });
  });

  it('should be created', inject([MenuProviderService], (service: MenuProviderService) => {
    expect(service).toBeTruthy();
  }));
});
