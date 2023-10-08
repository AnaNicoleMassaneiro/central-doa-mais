import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentSlotModalService } from '../appointment-slots/service/appointment-slot-modal.service';
import { UploadExamsModalComponent } from '../upload-exams-modal/upload-exams-modal.component';
import { ErrorModalComponent } from '../../shared/Modal/error-modal.component';
import { AppointmentService } from './services/appointments.service';
import { SuccessModalComponent } from 'src/app/shared/Modal/success-modal.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['date', 'time', 'hemobanco.address', 'hemobanco.city', 'hemobanco.state', 'hemobanco.zipCode', 'completed', 'actions'];

  constructor(
    private appointmentsService: AppointmentService,
    private dialog: MatDialog,
    private modalService: AppointmentSlotModalService
  ) { }

  ngOnInit(): void {
    this.updatetable();
  }

  openAppointmentForm() {
    this.modalService.openAppointmentSlotFormModal();
  }

  updatetable() {
    this.appointmentsService.getAppointment().subscribe((data: any[]) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }


  provideExams(appointmentId: number) {
    const dialogRef = this.dialog.open(UploadExamsModalComponent, {
      width: '500px',
      data: { appointmentId }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Você pode executar ações aqui após o fechamento da modal, se necessário.
    });
  }

  markAppointmentCompleted(appointmentId: number): void {
    this.appointmentsService.markAppointmentAsCompleted(appointmentId).subscribe(
      (message: string) => {
        const dialogRef = this.dialog.open(SuccessModalComponent, {
          width: '300px',
          data: { message }
        });

        dialogRef.afterClosed().subscribe(() => {
          this.updatetable();
        });
      },
      (error) => {
        const dialogRef = this.dialog.open(ErrorModalComponent, {
          width: '300px',
          data: { message: error.error }
        });
      }
    );
  }

 

}
