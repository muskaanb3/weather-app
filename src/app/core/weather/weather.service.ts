import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private API_KEY = 'fe3695759da76e0c9dcaf566634a08ed';
  private BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(this.BASE_URL, {
      params: {
        q: city,
        appid: this.API_KEY,
        units: 'metric',
      },
    });
  }
}
