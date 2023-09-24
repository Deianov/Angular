import { Booking } from './booking';

const bookings = [
  {
    id: 1,
    name: 'Jannick Leismann',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date('2023-07-21'),
  },
  {
    id: 2,
    name: 'Max Mustermann',
    roomNumber: 50,
    startDate: new Date('2023-07-25'),
    endDate: new Date('2023-08-01'),
  },
  {
    id: 3,
    name: 'John Doe',
    roomNumber: 2,
    startDate: new Date('2023-09-05'),
    endDate: new Date('2023-09-19'),
  },
  {
    id: 4,
    name: 'Maria Doemann',
    roomNumber: 105,
    startDate: new Date('2023-08-04'),
    endDate: new Date('2023-08-11'),
  },
];

export const bookingRepository = (function () {
  return {
    existsById(id: number): boolean {
      return bookings.some((x) => x.id === id);
    },
    getById(id: number): Booking | undefined {
      return bookings.find((x) => x.id === id);
    },
    getBookings(): Booking[] {
      return bookings;
    },
    save(booking: Booking): void {
      if (this.existsById(booking.id) == false) {
        bookings.push(booking);
      }
    },
    deleteByIndex(index: number): void {
      bookings.splice(index, 1);
    },
    create(): Booking {
      return {
        id: this.getId(),
        name: '',
        roomNumber: 0,
        startDate: new Date(),
        endDate: new Date(),
      };
    },
    getId(): number {
      return (
        bookings
          .map((b) => b.id)
          .reduce((prev, current) => (prev > current ? prev : current), 0) + 1
      );
    },
  };
})();
