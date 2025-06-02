import { Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { PostagemComponent } from './pages/postagem/postagem.component';

export const routes: Routes = [
  { path: '', component: FeedComponent }, // o Feed será a página inicial.
  { path: 'perfil', component: PerfilComponent }, // a rota para perfil.
  { path: 'login', component: LoginComponent }, // a rota para login.
  { path: 'postagem', component: PostagemComponent}, // a rota para os detalhes de uma postagem.
];