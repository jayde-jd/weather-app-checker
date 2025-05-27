import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';

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
  // Bootstrap the root component to launch the app
  bootstrap: [AppComponent],
})
export class AppModule {}
