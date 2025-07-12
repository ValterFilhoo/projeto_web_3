import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostagemService } from '../../services/postagens.service';
import { HeaderComponent } from '../../componentes/header/header.component';
import { BarraNavegacaoComponent } from '../../componentes/barra-navegacao/barra-navegacao.component';
import { DetalhesPostagemComponent } from '../../componentes/detalhes-postagem/detalhes-postagem.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Postagem } from '../../interfaces/postagem.interface';

@Component({
  selector: 'app-postagem',
  imports: [CommonModule, HeaderComponent, BarraNavegacaoComponent, DetalhesPostagemComponent, FooterComponent],
  templateUrl: './postagem.component.html',
  styleUrl: './postagem.component.css'
})
export class PostagemComponent implements OnInit {

  postagem: Postagem | null = null;

  constructor(private route: ActivatedRoute, private postagemService: PostagemService) {}

  ngOnInit(): void {
    this.carregarPostagem();
  };

  private async carregarPostagem(): Promise<void> {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    try {

      const resultado = await this.postagemService.getPostagemPorId(id);
      this.postagem = resultado;
    } catch (erro) {
      console.error('Erro ao buscar postagem:', erro);
    };

  };

};