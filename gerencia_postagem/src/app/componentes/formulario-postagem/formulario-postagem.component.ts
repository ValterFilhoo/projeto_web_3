import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-postagem',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario-postagem.component.html',
  styleUrls: ['./formulario-postagem.component.css']
})
export class FormularioPostagemComponent implements OnInit {

  @Input() valoresIniciais?: { idUsuario: string | number | null; legendaPostagem: string };
  @Output() dadosFormPostagem = new EventEmitter<{ idUsuario: string | number | null; legendaPostagem: string }>();

  public formulario = new FormGroup({
  idUsuario: new FormControl<string | number | null>('', [Validators.required, Validators.min(1)]),
  legendaPostagem: new FormControl<string | null>('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)])
  });

  ngOnInit(): void {

    if (this.valoresIniciais) {

      this.formulario.patchValue({
        idUsuario: Number(this.valoresIniciais.idUsuario ?? 0),
        legendaPostagem: this.valoresIniciais.legendaPostagem ?? ''
      });
      console.log('Valores recebidos no formulário:', this.valoresIniciais);
    };

  };

  enviarFormulario() {

    this.formulario.markAllAsTouched();

    if (this.formulario.valid) {

      console.log(`Dados submetidos: ${this.formulario.value.idUsuario}, ${this.formulario.value.legendaPostagem}`);

      this.dadosFormPostagem.emit({
        idUsuario: this.formulario.value.idUsuario ?? null,
        legendaPostagem: this.formulario.value.legendaPostagem ?? ''
      });

    } else {
      console.log('Formulário inválido. Corrija os campos antes de enviar.');
    };

  };

};