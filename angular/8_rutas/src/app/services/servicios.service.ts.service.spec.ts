import { TestBed } from '@angular/core/testing';

import { ServiciosServiceTsService } from './servicios.service.ts.service';

describe('ServiciosServiceTsService', () => {
  let service: ServiciosServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
