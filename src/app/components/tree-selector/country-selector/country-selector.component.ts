import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-country-selector',
  imports: [CommonModule, MatListModule],
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.scss',
})
export class CountrySelectorComponent {
  @Output() countrySelected = new EventEmitter<string>();

  countries = ['USA', 'Canada', 'Mexico'];
  isLoading = true;

  constructor(private countryService: CountriesService) {}

  ngOnInit(): void {
    this.countryService.fetchCountries().subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }

  selectCountry(country: string) {
    this.countrySelected.emit(country);
  }
}
