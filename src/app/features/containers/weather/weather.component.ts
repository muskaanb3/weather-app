import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  isLoading,
  getWeatherData,
  WeatherState,
  WeatherActions,
} from './../../+state';
import { Observable, Subscription } from 'rxjs';
import {
  WeatherCardComponent,
  WeathersSelectComponent,
} from './../../components';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { cities, IWeather } from '../../models';
@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    WeatherCardComponent,
    WeathersSelectComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  cities = cities;
  selectedCity!: string;
  loading$!: Observable<boolean>;
  subscriptions: Subscription = new Subscription();
  weatherData: IWeather[] = [];

  constructor(private store: Store<{ weather: WeatherState }>) {}

  ngOnInit() {
    this.loading$ = this.store.select(isLoading);
    this.getWeather();
  }

  getWeather() {
    this.subscriptions.add(
      this.store.select(getWeatherData).subscribe((data) => {
        this.weatherData = data;
      })
    );
  }

  onCityChange(city: string) {
    if (city) {
      this.selectedCity = city;
      this.store.dispatch(WeatherActions.getWeather({ city }));
    }
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
