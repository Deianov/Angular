import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  bookingsUrl: string = '/api/bookings';

  getBookings(): Observable<Booking[]> {
    let res = this.httpClient.get<Booking[]>(this.bookingsUrl);
    return res;
  }

  getById(id: number): Observable<Booking> {
    let res = this.httpClient.get<Booking>(this.bookingsUrl + '/' + id);
    return res;
  }

  add(booking: Booking): Observable<Booking> {
    let res = this.httpClient.post<Booking>(this.bookingsUrl, booking);
    return res;
  }

  delete(booking: Booking): Observable<Booking> {
    let res = this.httpClient.delete<Booking>(
      this.bookingsUrl + '/' + booking.id
    );
    return res;
  }

  getEmptyBooking(): Booking {
    return {
      id: -1,
      name: '',
      roomNumber: 0,
      startDate: new Date(),
      endDate: new Date(),
    };
  }
}
