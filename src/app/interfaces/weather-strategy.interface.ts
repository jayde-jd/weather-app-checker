import { Observable } from 'rxjs';

/**
 * Interface representing a strategy for retrieving weather forecasts.
 *
 * Implementations of this interface should provide a method to fetch weather forecast data
 * for a given city, returning the result as an Observable.
 */
export interface WeatherStrategy {
  getForecast(city: string): Observable<any>;
}
