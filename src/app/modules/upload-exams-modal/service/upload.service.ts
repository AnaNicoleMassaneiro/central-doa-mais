import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  errorModalMessage: string | null = null;

  constructor(private http: HttpClient) { }

  uploadPdf(appointmentId: string, pdfFile: File) {
    const formData = new FormData();
    formData.append('file', pdfFile);

    return this.http.post(`http://localhost:8080/appointments/upload-pdf?appointmentId=${appointmentId}`, formData, { responseType: 'text' });
  }


}
