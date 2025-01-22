import { CommonModule } from '@angular/common';
import { Component, Input, Output, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import {
  months,
  MonthSelectorComponent,
} from './month-selector/month-selector.component';

@Component({
  selector: 'app-tree-selector',
  imports: [
    CommonModule,
    MatToolbarModule,
    CountrySelectorComponent,
    MonthSelectorComponent,
  ],
  templateUrl: './tree-selector.component.html',
  styleUrl: './tree-selector.component.scss',
})
export class TreeSelectorComponent {
  selectedContry!: string;
  selectedMonth!: string;

  resetSelection() {
    this.selectedContry = '';
    this.selectedMonth = '';
  }

  onCountrySelected(country: string) {
    console.log('onCountrySelected', country);
    this.selectedContry = country;
  }

  onMonthSelected(month: string) {
    console.log('onMonthSelected', month);

    // this.resetSelection();

    this.selectedMonth = month;
  }
}
