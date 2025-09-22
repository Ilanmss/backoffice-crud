import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTabelasComponent } from './listar-tabelas.component';

describe('ListarTabelasComponent', () => {
  let component: ListarTabelasComponent;
  let fixture: ComponentFixture<ListarTabelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTabelasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTabelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
