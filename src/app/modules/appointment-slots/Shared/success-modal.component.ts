// success-modal.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-modal',
  template: `
    <h2>Sucesso!</h2>
    <p>O agendamento foi criado com sucesso.</p>
    <button mat-button (click)="closeDialog()">Fechar</button>
  `,
})
export class SuccessModalComponent {
  constructor(public dialogRef: MatDialogRef<SuccessModalComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
