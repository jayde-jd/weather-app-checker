import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [RouterLink, NgIf],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})

export class WeatherComponent implements OnInit {
  cityName = '';
  loading = true;
  errorMessage = '';
  weatherData: any = null;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    // Subscribe to query parameters to get the city name
    this.route.queryParams.subscribe(params => {
      const city = params['city'];
      if (city) {
        this.cityName = city;
        this.fetchWeatherData(city);
      } else {
        this.errorMessage = 'No city specified. Please go back and enter a city name.';
        this.loading = false;
      }
    });
  }

  // Fetch weather data for the specified city
  fetchWeatherData(city: string): void {
    this.loading = true;
    this.weatherService.getForecast(city).subscribe({
      next: data => {
        this.weatherData = data;
        this.loading = false;
      },
      error: error => {
        this.errorMessage = 'Failed to fetch weather data. Please try again.';
        this.loading = false;
        console.error('Weather service error:', error);
      }
    });
  }

  // Convert Unix timestamp to MM/DD/YYYY format
  formatUnixToDate(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  }

  // Convert Celsius to Fahrenheit and round to nearest integer
  celsiusToFahrenheit(celsius: number): number {
    return Math.round((celsius * 9 / 5) + 32);
  }
}
