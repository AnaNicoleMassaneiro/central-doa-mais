import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UploadService } from './service/upload.service';

@Component({
    selector: 'app-upload-exams-modal',
    templateUrl: './upload-exams-modal.component.html',
    styleUrls: ['./upload-exams-modal.component.scss']
})
export class UploadExamsModalComponent {
    selectedFile: File | null = null;

    constructor(public dialogRef: MatDialogRef<UploadExamsModalComponent>,
                private uploadService: UploadService) {}

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
          const appointmentId = '1';
          const donorId = '1';

          this.uploadService.uploadPdf(appointmentId, donorId, this.selectedFile).subscribe(
              (response) => {
                  console.log('Upload bem-sucedido:', response);
                  // Após o upload, você pode fechar a modal.
                  this.dialogRef.close();
              },
              (error) => {
                  console.error('Erro no upload:', error);
                  // Lidar com erros aqui, se necessário.
              }
          );
      }
  }
}
