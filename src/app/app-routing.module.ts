import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentSlotFormComponent } from './modules/appointment-slots/appointment-slot-form/appointment-slot-form.component';
import { AppointmentsComponent } from './modules/appointments/appointments.component';
import { UserTableComponent } from './modules/User/user-table/user-table.component';

const routes: Routes = [
  { path: '', component: UserTableComponent },
  { path: 'usuarios', component: UserTableComponent },
  { path: 'agendamentos', component: AppointmentsComponent },
  { path: 'cadastro-agendamento', component: AppointmentSlotFormComponent }, // Configure a rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
