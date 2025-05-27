import { Injectable, Inject } from '@angular/core';
import { WeatherStrategy } from '../interfaces/weather-strategy.interface';
import { WEATHER_STRATEGY } from '../tokens/weather-strategy.token';

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
  constructor(@Inject(WEATHER_STRATEGY) private strategy: WeatherStrategy) {}

  getForecast(city: string) {
    return this.strategy.getForecast(city);
  }
}
