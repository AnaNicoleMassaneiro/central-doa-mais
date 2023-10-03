import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './modules/appointments/appointments.component';
import { UserTableComponent } from './modules/User/user-table/user-table.component';

const routes: Routes = [
  { path: '', component: UserTableComponent },
  { path: 'usuarios', component: UserTableComponent },
  { path: 'agendamentos', component: AppointmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
