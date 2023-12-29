import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { CourseCardComponent } from "./course-card/course-card.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CourseCardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
