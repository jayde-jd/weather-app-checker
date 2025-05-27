import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Service for fetching weather data from the OpenWeatherMap API.
 *
 * @remarks
 * This service provides methods to retrieve current weather information for a specified city.
 * It uses the OpenWeatherMap API and returns the data as an observable.
 *
 * @example
 * ```typescript
 * weatherService.getForecast('London').subscribe(data => {
 *   console.log(data);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private apiKey = '2fb94fae024ed5b2a183f0e72e4499a7';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getForecast(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
