import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorModalComponent } from '../Shared/error-modal.component';
import { SuccessModalComponent } from '../Shared/success-modal.component';
import { AppointmentSlotsService } from '../service/appointment-slots.service';

@Component({
  selector: 'app-appointment-slot-form',
  templateUrl: './appointment-slot-form.component.html',
  styleUrls: ['./appointment-slot-form.component.scss'],
})
export class AppointmentSlotFormComponent {
  formData: any = {
    availableDates: [
      {
        date: '',
        availableTimeSlots: [],
      },
    ],
    hemobancoAddressId: 1,
  };

  timeSlots: string[] = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00',
  ];

  constructor(
    private appointmentSlotsService: AppointmentSlotsService,
    public dialogRef: MatDialogRef<AppointmentSlotFormComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeModal() {
    this.dialogRef.close();
  }

  onSubmit() {
    // Formate os dados antes de enviá-los para o serviço
    this.formData.availableDates[0].availableTimeSlots = this.timeSlots.map((time) => ({ time }));

    this.appointmentSlotsService.createAppointmentSlots(this.formData).subscribe(
      (response) => {
        console.log('Agendamento criado com sucesso!', response);
        this.openSuccessModal();
        // Redirecionar ou realizar outra ação após o sucesso do cadastro
      },
      (error) => {
        console.error('Erro ao criar agendamento:', error);
        this.openErrorModal();
        // Lidar com erros aqui
      }
    );
  }

  openSuccessModal() {
    this.dialog.open(SuccessModalComponent, {
      width: '400px',
    });
  }

  openErrorModal() {
    this.dialog.open(ErrorModalComponent, {
      width: '400px',
    });
  }

}
