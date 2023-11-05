import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent {
  successMessage: string;

  constructor(
    public dialogRef: MatDialogRef<SuccessModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { successMessage: string }
  ) {
    this.successMessage = data.successMessage; // Inicialize a propriedade successMessage
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
