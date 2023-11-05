import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8080/appointments';

  constructor(private http: HttpClient) {}

  getAppointment(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  markAppointmentAsCompleted(appointmentId: number): Observable<any> {
    const url = `${this.apiUrl}/${appointmentId}/complete`;
    return this.http.put(url, null);
  }

  hasPdfForAppointment(appointmentId: string): Observable<boolean> {
    return this.http.get<boolean>(`http://localhost:8080/appointments/appointment/${appointmentId}/has-pdf`);
  }

  downloadPdfForAppointment(appointmentId: number) {
    // Defina o cabeçalho 'Accept' para indicar que você deseja receber um PDF
    const headers = new HttpHeaders({
      'Accept': 'application/pdf',
    });

    // Faça a solicitação HTTP para o download do PDF
    return this.http.get(`http://localhost:8080/appointments/${appointmentId}/download-pdf`, { headers, responseType: 'blob' });
  }
}
