import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';

export const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

@Component({
  selector: 'app-month-selector',
  imports: [CommonModule, MatListModule],
  templateUrl: './month-selector.component.html',
  styleUrl: './month-selector.component.scss',
})
export class MonthSelectorComponent {
  @Input() country!: string; // | null = null;
  @Output() monthSelected = new EventEmitter<any>();

  months = months;

  selectMonth(month: string) {
    console.log('01  - selectMonth');
    this.monthSelected.emit(month);
  }

  // monthsObj: any[] = [
  //   { name: 'January', monthNumber: 1, localLanguage: 'Јануари' },
  // ];
}
