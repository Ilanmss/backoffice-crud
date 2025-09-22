import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasTabelasComponent } from './minhas-tabelas.component';

describe('MinhasTabelasComponent', () => {
  let component: MinhasTabelasComponent;
  let fixture: ComponentFixture<MinhasTabelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhasTabelasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasTabelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
