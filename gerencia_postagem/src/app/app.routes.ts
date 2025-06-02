import { Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { NovaPostagemComponent } from './pages/nova-postagem/nova-postagem.component';
import { EditarPostagemComponent } from './pages/editar-postagem/editar-postagem.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', component: FeedComponent }, // o Feed será a página inicial.
  { path: 'perfil', component: PerfilComponent }, // a rota para perfil.
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent }, // a rota para a pagina de cadastro.
  { path: 'postagem', component: PostagemComponent }, // a rota para os detalhes de uma postagem.
  { path: 'nova-postagem', component: NovaPostagemComponent }, 
  { path: 'editar-postagem', component: EditarPostagemComponent }
];