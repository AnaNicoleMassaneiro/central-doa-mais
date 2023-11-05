import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from 'src/app/success-modal/success-modal.component';
import { UploadService } from './service/upload.service';

@Component({
  selector: 'app-upload-exams-modal',
  templateUrl: './upload-exams-modal.component.html',
  styleUrls: ['./upload-exams-modal.component.scss']
})
export class UploadExamsModalComponent {
  selectedFile: File | null = null;
  errorModalMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    public dialogRef: MatDialogRef<UploadExamsModalComponent>,
    private uploadService: UploadService,
    @Inject(MAT_DIALOG_DATA) public data: { appointmentId: string },
    private dialog: MatDialog
  ) { }

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
    } else {
      this.selectedFile = null;
    }
  }

  uploadExams() {
    if (this.selectedFile) {
      const appointmentId = this.data.appointmentId;

      this.uploadService.uploadPdf(appointmentId, this.selectedFile).subscribe(
        (response) => {
          console.log('Resposta bem-sucedida:', response);
          this.dialogRef.close();
          this.showSuccessModal(response); // Abra a modal de sucesso
        },
        (error) => {
          console.error('Erro no upload:', error);
          this.errorModalMessage = error.error;
        }
      );
    }
  }

  showSuccessModal(message: string): void {
    this.dialog.open(SuccessModalComponent, {
      data: { successMessage: message }
    });
  }

  showSuccessMessage(message: string): void {
    console.log('teste')
    console.log(message)
    this.successMessage = message;
  }

}
