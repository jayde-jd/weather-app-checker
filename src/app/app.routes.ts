import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { WeatherComponent } from './weather/weather.component';
import { AuthGuard } from './auth.guard';

/**
 * Defines the application's main route configuration.
 *
 * - Redirects the root path ('') to the '/landing' page.
 * - Maps '/landing' to the `LandingComponent`.
 * - Maps '/home' to the `HomeComponent`, protected by `AuthGuard`.
 * - Maps '/weather' to the `WeatherComponent`, protected by `AuthGuard`.
 * - Wildcard route ('**') redirects any unknown paths to '/landing' (acts as a 404 handler).
 *
 * @type {Routes}
 */
export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'weather', component: WeatherComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/landing' } // Wildcard route for a 404 page
];
