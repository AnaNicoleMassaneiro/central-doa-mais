import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { UserTableComponent } from './modules/User/user-table/user-table.component';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { AppointmentsComponent } from './modules/appointments/appointments.component';
import { AppointmentSlotsComponent } from './modules/appointment-slots/appointment-slots.component';
import { AppointmentSlotFormComponent } from './modules/appointment-slots/appointment-slot-form/appointment-slot-form.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AppointmentsListComponent } from './modules/appointment-slots/appointments-list/appointments-list.component';
import { MatSelectModule } from '@angular/material/select'; 

@NgModule({
  declarations: [AppComponent, UserTableComponent, SidebarComponent, AppointmentsComponent, AppointmentSlotsComponent, AppointmentSlotFormComponent, AppointmentsListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
