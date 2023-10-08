import { Component } from '@angular/core';
import { AppointmentSlotModalService } from '../service/appointment-slot-modal.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent {
  constructor(private modalService: AppointmentSlotModalService) {}

  openAppointmentFormModal() {
    this.modalService.openAppointmentSlotFormModal();
  }
}
