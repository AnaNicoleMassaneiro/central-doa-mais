import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './modules/User/user-table/user-table.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/users' }, // Rota padrão redireciona para a lista de usuários
  { path: 'users', component: UserTableComponent },
  // ... outras rotas se necessário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
