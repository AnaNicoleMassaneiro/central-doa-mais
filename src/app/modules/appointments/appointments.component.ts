import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppointmentSlotModalService } from '../appointment-slots/service/appointment-slot-modal.service';
import { UploadExamsModalComponent } from '../upload-exams-modal/upload-exams-modal.component';
import { ErrorModalComponent } from '../../shared/Modal/error-modal.component';
import { AppointmentService } from './services/appointments.service';
import { SuccessModalComponent } from 'src/app/shared/Modal/success-modal.component';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['date', 'time', 'hemobanco.address', 'hemobanco.city', 'hemobanco.state', 'hemobanco.zipCode', 'completed', 'actions'];
  isPdfAvailable: boolean[] = [];
  pdfAvailabilityMap: Map<number, boolean> = new Map<number, boolean>();

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

      // Preencha o mapa com a disponibilidade do PDF
      data.forEach(appointment => {
        this.checkForPdf(appointment.id).subscribe(pdfAvailable => {
          this.pdfAvailabilityMap.set(appointment.id, pdfAvailable);
        });
      });
    });
  }


  provideExams(appointmentId: number) {
    const dialogRef = this.dialog.open(UploadExamsModalComponent, {
      data: { appointmentId: appointmentId }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('O modal foi fechado');
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

  checkForPdf(appointmentId: string) {
    console.log(appointmentId)
    return this.appointmentsService.hasPdfForAppointment(appointmentId);
  }

  downloadPdf(appointmentId: number) {
    this.appointmentsService.downloadPdfForAppointment(appointmentId).subscribe(
      (pdf: Blob) => {
        if (pdf.size > 0) {
          // Crie um Blob de dados e defina o tipo de arquivo como 'application/pdf'
          const blob = new Blob([pdf], { type: 'application/pdf' });

          // Use a biblioteca file-saver para fazer o download do PDF
          saveAs(blob, `appointment_${appointmentId}.pdf`);
        } else {
          // Trate o caso em que o PDF está vazio ou ocorreu um erro
          console.error('O PDF está vazio ou ocorreu um erro durante o download.');
        }
      },
      (error) => {
        console.error('Erro ao baixar o PDF', error);
      }
    );
  }


}


