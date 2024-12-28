import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountrySelectorComponent } from './country-selector/country-selector.component';

@Component({
  selector: 'app-tree-selector',
  imports: [CommonModule, MatToolbarModule, CountrySelectorComponent],
  templateUrl: './tree-selector.component.html',
  styleUrl: './tree-selector.component.scss',
})
export class TreeSelectorComponent {
  selectedContry!: string;
  selectedYear = '';

  resetSelection() {
    this.selectedContry = '';
    this.selectedYear = '';
  }

  onCountrySelected(country: string) {
    console.log('onCountrySelected', country);
    this.selectedContry = country;
  }
}
