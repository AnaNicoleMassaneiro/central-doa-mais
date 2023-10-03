// appointment-slots.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentSlotsService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  createAppointmentSlots(data: any): Observable<any> {
    const url = `${this.baseUrl}/hemobanco_dates`;
    return this.http.post(url, data);
  }
}
