import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPostagemComponent } from './nova-postagem.component';

describe('NovaPostagemComponent', () => {
  let component: NovaPostagemComponent;
  let fixture: ComponentFixture<NovaPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaPostagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
