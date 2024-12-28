import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'console';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  fetchCountries(): Observable<any[]> {
    return this.http
      .get<any[]>('https://restcountries.com/v3.1/all?fields=name')
      .pipe(
        map((data) => {
          const countries = data.map((country) =>
            country.name.common === 'North Macedonia'
              ? 'Macedonia'
              : country.name.common
          );
          return countries.sort((a, b) => {
            if (a === 'Macedonia') return -1; // Put Macedonia at the top
            if (b === 'Macedonia') return 1;
            return a.localeCompare(b); // Sort the rest alphabetically
          });
        })
      );
  }
}
