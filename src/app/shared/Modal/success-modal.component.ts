// success-modal.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success-modal',
  template: `
    <h2>Sucesso!</h2>
    <p>{{ errorMessage }}</p>
    <button mat-button (click)="closeDialog()">Fechar</button>
  `,
})
export class SuccessModalComponent {
   errorMessage: string;

  constructor(
    public dialogRef: MatDialogRef<SuccessModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {
    this.errorMessage = data.message;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
