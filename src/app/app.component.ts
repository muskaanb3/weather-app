import { Component } from '@angular/core';
import { WeatherComponent } from './features/containers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-weather-app';
}
