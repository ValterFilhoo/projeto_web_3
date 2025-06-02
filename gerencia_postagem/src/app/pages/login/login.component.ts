import { Component } from '@angular/core';
import { FormularioLoginComponent } from '../../componentes/formulario-login/formulario-login.component';
import { FeedbackSucessoErroComponent } from '../../componentes/feedback-sucesso-erro/feedback-sucesso-erro.component';

@Component({
  selector: 'app-login',
  imports: [FormularioLoginComponent, FeedbackSucessoErroComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
