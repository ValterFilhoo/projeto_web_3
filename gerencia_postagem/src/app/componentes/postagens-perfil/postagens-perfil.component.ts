import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-postagens-perfil',
  templateUrl: './postagens-perfil.component.html',
  styleUrls: ['./postagens-perfil.component.css'],
  imports: [CommonModule, RouterLink]
})
export class PostagensPerfilComponent {

  postagens = [

    { id: 1, imagem: "assets/images/img_dog.png" },
    { id: 2, imagem: "assets/images/img_dog.png" },
    { id: 3, imagem: "assets/images/img_dog.png" },
    { id: 4, imagem: "assets/images/img_dog.png" },
    { id: 5, imagem: "assets/images/img_dog.png" },
    { id: 6, imagem: "assets/images/img_dog.png" },
   
  ];

  
}