import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-postagem',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario-postagem.component.html',
  styleUrls: ['./formulario-postagem.component.css'],
})
export class FormularioPostagemComponent {

  @Output() dadosFormPostagem = new EventEmitter<{ id: number; legenda: string}>();

  public formulario = new FormGroup({

    idUsuario: new FormControl('', [Validators.required, Validators.min(1)]),
    legendaPostagem: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)])

  });

  enviarFormulario() {
    
    if(this.formulario.valid) {

      console.log(`Dados submetidos: ${this.formulario.value.idUsuario}, ${this.formulario.value.legendaPostagem}`)

      this.dadosFormPostagem.emit({
        id: Number(this.formulario.value.idUsuario),
        legenda: this.formulario.value.legendaPostagem ?? ''
      });

    }

  }

}