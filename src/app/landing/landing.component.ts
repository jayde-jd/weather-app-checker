import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'] // Fixed typo: should be 'styleUrls'
})

export class LandingComponent {

  // Inject AuthService to handle authentication
  constructor(public auth: AuthService) {}

  /**
   * Initiates login flow using Auth0 redirect.
   */
  loginWithAuth0(): void {
    this.auth.loginWithRedirect();
  }
}
