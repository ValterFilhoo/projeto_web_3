import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPostagemComponent } from './editar-postagem.component';

describe('EditarPostagemComponent', () => {
  let component: EditarPostagemComponent;
  let fixture: ComponentFixture<EditarPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPostagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
