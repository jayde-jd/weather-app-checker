import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherStrategy } from '../interfaces/weather-strategy.interface';

@Injectable()
export class MockWeatherStrategy implements WeatherStrategy {
  getForecast(city: string): Observable<any> {
    // Return mock data for demonstration/testing
    return of({
      dt: Date.now() / 1000,
      name: city,
      main: { temp: 20, pressure: 1012, humidity: 60 },
      weather: [{ description: 'Clear sky', main: 'Clear' }]
    });
  }
}
