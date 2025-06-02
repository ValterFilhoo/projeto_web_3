import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtdComentariosComponent } from './qtd-comentarios.component';

describe('QtdComentariosComponent', () => {
  let component: QtdComentariosComponent;
  let fixture: ComponentFixture<QtdComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QtdComentariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QtdComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
