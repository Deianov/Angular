import { Component, OnInit } from '@angular/core';

import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  constructor(private service: BookingService) {}

  bookings: Booking[] = [];

  ngOnInit(): void {
    this.service.getBookings().subscribe((result) => {
      this.bookings = result;
    });
  }

  delete(booking: Booking): void {
    this.service.delete(booking).subscribe();
    this.bookings = this.bookings.filter((b) => b != booking);
  }
}
