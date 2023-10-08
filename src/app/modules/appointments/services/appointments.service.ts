import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    console.log(appointmentId)
    const url = `${this.apiUrl}/${appointmentId}/complete`;
    return this.http.put(url, null);
  }
}
