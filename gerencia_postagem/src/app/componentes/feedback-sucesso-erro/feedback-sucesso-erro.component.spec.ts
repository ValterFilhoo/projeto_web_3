import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSucessoErroComponent } from './feedback-sucesso-erro.component';

describe('FeedbackSucessoErroComponent', () => {
  let component: FeedbackSucessoErroComponent;
  let fixture: ComponentFixture<FeedbackSucessoErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackSucessoErroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackSucessoErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
