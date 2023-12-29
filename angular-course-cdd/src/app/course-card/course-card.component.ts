import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Course } from "../model/course";

type NgClassArgument = string | string[] | { [key: string]: boolean };

@Component({
  selector: "course-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input()
  course: Course;

  @Input({ required: true })
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    this.courseSelected.emit(this.course);
  }

  cardClass(): NgClassArgument {
    return {
      beginner: this.course.category === "BEGINNER",
    };
  }

  cardStyle() {
    return {
      "text-decoration": "underline",
      // "background-image": "url(" + this.course.iconUrl + ")",
    };
  }
}
