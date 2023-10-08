import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-modal',
  template: `
    <h2>Erro!</h2>
    <p>{{ errorMessage }}</p>
    <button mat-button (click)="closeDialog()">Fechar</button>
  `,
})
export class ErrorModalComponent {
  errorMessage: string;

  constructor(
    public dialogRef: MatDialogRef<ErrorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {
    this.errorMessage = data.message;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
