import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Booking } from '../booking';
import { BookingService } from '../booking.service';

class DateMapper {
  private constructor() {}
  static toString(date: Date): string {
    return date instanceof Date ? date.toJSON().split('T')[0] : '';
  }
  static toDate(dateString: string): Date {
    return dateString === '' ? new Date() : new Date(dateString);
  }
}

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: BookingService,
    private formBuilder: FormBuilder
  ) {}

  booking: Booking = this.service.getEmptyBooking();
  formLabel: string = '';

  /**
   * toDo:
   * https://angular.io/guide/typed-forms#formgroup-and-formrecord
   */

  bookingForm = this.formBuilder.group({
    id: [<number | null>null],
    name: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
    ],
    roomNumber: [<number | null>null, Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  });

  ngOnInit(): void {
    if (this.router.url === '/create') {
      // this.booking = this.service.getEmptyBooking();
      this.service.getBookings().subscribe((result) => {
        this.booking.id =
          result
            .map((b) => b.id)
            .reduce((prev, current) => (prev > current ? prev : current), 0) +
          1;
        this.bookingForm.patchValue({
          id: this.booking.id,
          startDate: DateMapper.toString(new Date()),
        });
      });
      this.formLabel = 'Create new Booking';
    } else {
      this.formLabel = 'Update Booking';
      this.update();
    }
  }

  save(): void {
    this.booking.name = this.bookingForm.getRawValue().name as string;
    // this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value!;
    this.booking.roomNumber = this.bookingForm.getRawValue()
      .roomNumber as number;
    this.booking.startDate = DateMapper.toDate(
      this.bookingForm.getRawValue().startDate as string
    );
    this.booking.endDate = DateMapper.toDate(
      this.bookingForm.getRawValue().endDate as string
    );
    this.service.add(this.booking).subscribe();
    this.router.navigate(['bookings']);
  }

  update() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.service.getById(id).subscribe((result) => {
      this.booking.id = result.id;
      this.booking.name = result.name;
      this.booking.roomNumber = result.roomNumber;
      this.booking.startDate = new Date(result.startDate);
      this.booking.endDate = new Date(result.endDate);

      // patchValue
      this.bookingForm.setValue({
        id: this.booking.id,
        roomNumber: this.booking.roomNumber,
        name: this.booking.name,
        startDate: DateMapper.toString(this.booking.startDate),
        endDate: DateMapper.toString(this.booking.endDate),
      });
    });
  }

  // dateChanged(event: Event, isStart: boolean): void {
  //   const date = (event.target as HTMLInputElement).value;
  //   if (isStart) {
  //     this.booking.startDate = new Date(date);
  //   } else {
  //     this.booking.endDate = new Date(date);
  //   }
  // }
}
