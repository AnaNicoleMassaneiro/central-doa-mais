// error-modal.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-modal',
  template: `
    <h2>Erro!</h2>
    <p>Ocorreu um erro ao criar o agendamento.</p>
    <button mat-button (click)="closeDialog()">Fechar</button>
  `,
})
export class ErrorModalComponent {
  constructor(public dialogRef: MatDialogRef<ErrorModalComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
