import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCurtidaComponent } from './botao-curtida.component';

describe('BotaoCurtidaComponent', () => {
  let component: BotaoCurtidaComponent;
  let fixture: ComponentFixture<BotaoCurtidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoCurtidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCurtidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
