import { TestBed } from '@angular/core/testing';

import { BuscarTabelasService } from './buscar-tabelas.service';

describe('BuscarTabelasService', () => {
  let service: BuscarTabelasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarTabelasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
