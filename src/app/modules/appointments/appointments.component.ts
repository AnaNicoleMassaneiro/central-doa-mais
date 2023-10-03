import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentService } from './services/appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'cpf'];
  dataSource = new MatTableDataSource<any>();

  constructor(private appService: AppointmentService) {}

  ngOnInit() {
    this.appService.getAppointment().subscribe(users => {
      this.dataSource.data = users;
    });
  }
}
