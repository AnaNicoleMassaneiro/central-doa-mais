import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppointmentSlotModalService } from '../appointment-slots/service/appointment-slot-modal.service';
import { AppointmentService } from './services/appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  dataSource!: MatTableDataSource<any>; // Inicialize como MatTableDataSource<any>
 // Inicialize como MatTableDataSource<any>
  displayedColumns: string[] = ['date', 'time', 'hemobanco.address', 'hemobanco.city', 'hemobanco.state', 'hemobanco.zipCode', 'userId'];

  constructor(private appointmentsService: AppointmentService, private router: Router,
    private modalService: AppointmentSlotModalService) {}

  ngOnInit(): void {
    this.appointmentsService.getAppointment().subscribe((data: any[]) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  openAppointmentForm() {
    this.modalService.openAppointmentSlotFormModal();
  }
}
