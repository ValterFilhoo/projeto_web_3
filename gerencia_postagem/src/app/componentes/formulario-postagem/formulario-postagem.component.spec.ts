import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPostagemComponent } from './formulario-postagem.component';

describe('FormularioPostagemComponent', () => {
  let component: FormularioPostagemComponent;
  let fixture: ComponentFixture<FormularioPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPostagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
