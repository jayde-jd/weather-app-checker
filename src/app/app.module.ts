import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { OpenWeatherStrategy } from './services/open-weather-strategy.service';
import { MockWeatherStrategy } from './services/mock-weather-strategy.service';
import { WEATHER_STRATEGY } from './tokens/weather-strategy.token';

@NgModule({
  // Declare the components that belong to this module
  declarations: [
    AppComponent
  ],
  // Import other modules required by this module
  imports: [
    BrowserModule,
    // Configure Auth0 authentication
    AuthModule.forRoot({
      domain: 'dev-opdgi7oapcsdej1h.us.auth0.com', // Auth0 domain
      clientId: 'hCqukAMFP8GwupKkLV6XewmMFLatzcU0', // Auth0 client ID
      authorizationParams: {
        redirect_uri: window.location.origin, // Redirect after login
        connection: 'github' // Use GitHub as the connection
      }
    }),
  ],
  providers: [
    OpenWeatherStrategy,
    MockWeatherStrategy,
    { provide: WEATHER_STRATEGY, useClass: OpenWeatherStrategy }
  ],
  // Bootstrap the root component to launch the app
  bootstrap: [AppComponent],
})
export class AppModule {}
