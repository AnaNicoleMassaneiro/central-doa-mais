import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) {}

  uploadPdf(appointmentId: string, donorId: string, pdfFile: File) {
    const formData = new FormData();
    formData.append('file', pdfFile);

    return this.http.post('http://localhost:8080/appointments/upload-pdf', formData);
  }
}
