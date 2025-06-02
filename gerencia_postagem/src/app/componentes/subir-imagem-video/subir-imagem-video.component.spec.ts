import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirImagemVideoComponent } from './subir-imagem-video.component';

describe('SubirImagemVideoComponent', () => {
  let component: SubirImagemVideoComponent;
  let fixture: ComponentFixture<SubirImagemVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirImagemVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirImagemVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
