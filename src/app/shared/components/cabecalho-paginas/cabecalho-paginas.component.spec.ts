import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoPaginasComponent } from './cabecalho-paginas.component';

describe('CabecalhoPaginasComponent', () => {
  let component: CabecalhoPaginasComponent;
  let fixture: ComponentFixture<CabecalhoPaginasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoPaginasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
