import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { WeatherService } from './../../../core';
import { WeatherActions } from '../actions';

export class WeatherEffects {
  private actions$ = inject(Actions);
  private weatherService = inject(WeatherService);

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.getWeather),
      switchMap(({ city }) =>
        this.weatherService.getWeather(city).pipe(
          map((response) => {
            const mappedData = response.list
              .filter((entry: any) => entry.dt_txt.includes('12:00:00'))
              .map((entry: any) => ({
                date: entry.dt_txt,
                temp: entry.main.temp,
                wind: entry.wind.speed,
                description: entry.weather[0]?.description,
                icon: entry.weather[0]?.icon,
                minTemp: entry.main.temp_min,
                maxTemp: entry.main.temp_max,
              }));

            return WeatherActions.getWeatherSuccess({ data: mappedData });
          }),
          catchError((error) => of(WeatherActions.getWeatherFailure({ error })))
        )
      )
    )
  );
}
