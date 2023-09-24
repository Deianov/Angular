import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';

import { Booking } from './booking';
import { bookingRepository } from './mock-bookings';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookings = bookingRepository.getBookings();
    return { bookings };
  }
  constructor() {}
}
