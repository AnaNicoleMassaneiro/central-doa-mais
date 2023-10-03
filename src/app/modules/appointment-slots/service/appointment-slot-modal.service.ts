import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentSlotFormComponent } from '../appointment-slot-form/appointment-slot-form.component';

@Injectable({
  providedIn: 'root'
})
export class AppointmentSlotModalService {
  constructor(private dialog: MatDialog) {}

  openAppointmentSlotFormModal() {
    this.dialog.open(AppointmentSlotFormComponent, {
      width: '400px', // Defina o tamanho desejado
      // Outras opções de configuração do modal
    });
  }
}
