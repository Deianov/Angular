import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { EventSignupComponent } from './event-signup/event-signup.component';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    CreateBookingComponent,
    EventSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {}),
    // dataEncapsulation: true,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/**   toDo: change the days/months position in create/edit form
 *
 *    https://stackoverflow.com/questions/49850214/angular-5-date-language
 *
 *

      As you already pointed out you have to define a locale within your app. The documentation for the DatePipe states

          Formats a date according to locale rules.

      The pipe has to be used like so

      {{ date_expression | date[:format[:timezone[:locale]]] }}

      As you can see, the pipe accepts a format, timezone and locale parameter (besides the actual date that is to be parsed). Reading further, documentation states

          locale is a string defining the locale to use (uses the current LOCALE_ID by default)

      Here's a read up on how the LOCALE definition works. You probably want to localize your entire application in German. First, you want to import the German locales within your AppModule.

      import { registerLocaleData } from '@angular/common';
      import localeDe from '@angular/common/locales/de';
      import {LOCALE_ID, NgModule} from '@angular/core';

      registerLocaleData(localeDe);

      Now you can use the locale as usual

      @NgModule({
        // ...
        providers: [{provide: LOCALE_ID, useValue: 'de'}]
      })
      export class AppModule{}

      Your initial expression {{viewDate | date:'MMM'}} should now output the german localized abbreviated month.

 */
