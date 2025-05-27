import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';

/**
 * Application configuration object for the Angular app.
 *
 * @remarks
 * This configuration sets up core providers for the application, including:
 * - Zone change detection with event coalescing enabled.
 * - Angular router with predefined routes.
 * - Auth0 authentication integration with GitHub as the connection.
 * - HTTP client for making HTTP requests.
 *
 * @property {ApplicationConfig} appConfig - The main application configuration.
 * @see {@link provideZoneChangeDetection}
 * @see {@link provideRouter}
 * @see {@link provideAuth0}
 * @see {@link provideHttpClient}
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
    provideHttpClient()
  ]
};
