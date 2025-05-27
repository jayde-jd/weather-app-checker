import { InjectionToken } from '@angular/core';
import { WeatherStrategy } from '../interfaces/weather-strategy.interface';

/**
 * Injection token for providing a `WeatherStrategy` implementation.
 *
 * This token can be used to inject a specific service
 * throughout the application.
 *
 * @see WeatherStrategy
 */
export const WEATHER_STRATEGY = new InjectionToken<WeatherStrategy>('WeatherStrategy');
