import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { EventSignupComponent } from './event-signup/event-signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bookings',
    pathMatch: 'full',
  },
  {
    path: 'bookings',
    component: BookingsComponent,
  },
  {
    path: 'create',
    component: CreateBookingComponent,
  },
  {
    path: 'edit/:id',
    component: CreateBookingComponent,
  },
  {
    path: 'events',
    component: EventSignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}