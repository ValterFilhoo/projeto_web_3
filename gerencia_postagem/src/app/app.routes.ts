import { Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { NovaPostagemComponent } from './pages/nova-postagem/nova-postagem.component';
import { EditarPostagemComponent } from './pages/editar-postagem/editar-postagem.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'postagem/:id', component: PostagemComponent }, 
  { path: 'nova-postagem', component: NovaPostagemComponent }, 
  { path: 'editar-postagem/:id', component: EditarPostagemComponent }
];