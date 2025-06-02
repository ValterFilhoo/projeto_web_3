import { Component } from '@angular/core';
import { FormularioCadastroComponent } from '../../componentes/formulario-cadastro/formulario-cadastro.component';
import { FeedbackSucessoErroComponent } from '../../componentes/feedback-sucesso-erro/feedback-sucesso-erro.component';

@Component({
  selector: 'app-cadastro',
  imports: [FormularioCadastroComponent, FeedbackSucessoErroComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}
