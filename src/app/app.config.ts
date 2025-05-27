import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';
import { WEATHER_STRATEGY } from './tokens/weather-strategy.token';
import { OpenWeatherStrategy } from './services/open-weather-strategy.service';
import { MockWeatherStrategy } from './services/mock-weather-strategy.service';

/**
 * Application configuration object for the Angular app.
 *
 * @remarks
 * This configuration sets up core providers for the application, including:
 * - Zone change detection with event coalescing enabled.
 * - Angular router with predefined routes.
 * - Auth0 authentication configured for GitHub connection.
 * - HTTP client for making API requests.
 * - Weather strategy providers, including both OpenWeather and Mock strategies.
 * - Sets the default weather strategy to `OpenWeatherStrategy`.
 *
 * @see {@link ApplicationConfig}
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-opdgi7oapcsdej1h.us.auth0.com',
      clientId: 'hCqukAMFP8GwupKkLV6XewmMFLatzcU0',
      authorizationParams: {
        redirect_uri: window.location.origin,
        connection: 'github'
      }
    }),
    provideHttpClient(),
    OpenWeatherStrategy,
    MockWeatherStrategy,
    { provide: WEATHER_STRATEGY, useClass: OpenWeatherStrategy }
  ]
};
