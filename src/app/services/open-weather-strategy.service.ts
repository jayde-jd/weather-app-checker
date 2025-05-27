import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherStrategy } from '../interfaces/weather-strategy.interface';

/**
 * Injectable service implementing the WeatherStrategy interface to fetch weather data
 * from the OpenWeatherMap API.
 *
 * @remarks
 * This strategy uses the OpenWeatherMap API to retrieve current weather information
 * for a specified city. The API key and base URL are hardcoded for demonstration purposes.
 *
 * @example
 * ```typescript
 * const forecast$ = openWeatherStrategy.getForecast('London');
 * forecast$.subscribe(data => console.log(data));
 * ```
 */
@Injectable()
export class OpenWeatherStrategy implements WeatherStrategy {
  private apiKey = '2fb94fae024ed5b2a183f0e72e4499a7';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getForecast(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
