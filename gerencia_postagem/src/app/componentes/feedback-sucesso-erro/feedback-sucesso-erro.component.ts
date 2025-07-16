import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-sucesso-erro',
  imports: [CommonModule],
  templateUrl: './feedback-sucesso-erro.component.html',
  styleUrls: ['./feedback-sucesso-erro.component.css'],
})
export class FeedbackSucessoErroComponent {

  @Input() tipo: 'sucesso' | 'erro' = 'sucesso';
  @Input() mensagem: string = '';

};