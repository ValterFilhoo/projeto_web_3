import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagensPerfilComponent } from './postagens-perfil.component';

describe('PostagensPerfilComponent', () => {
  let component: PostagensPerfilComponent;
  let fixture: ComponentFixture<PostagensPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostagensPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostagensPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
