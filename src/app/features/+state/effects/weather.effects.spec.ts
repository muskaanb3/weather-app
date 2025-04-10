import { WeatherEffects } from './weather.effects';
import { WeatherActions } from '../actions';
import { WeatherService } from './../../../core';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { Action } from '@ngrx/store';

describe('WeatherEffects', () => {
  let actions$: Observable<Action>;
  let effects: WeatherEffects;
  let weatherService: jest.Mocked<WeatherService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherEffects,
        provideMockActions(() => actions$),
        {
          provide: WeatherService,
          useValue: {
            getWeather: jest.fn(),
          },
        },
      ],
    });

    effects = TestBed.inject(WeatherEffects);
    weatherService = TestBed.inject(
      WeatherService
    ) as jest.Mocked<WeatherService>;
  });

  it('should dispatch getWeatherSuccess on successful API call', (done) => {
    const mockResponse = {
      list: [
        {
          dt_txt: '2023-08-20 12:00:00',
          main: {
            temp: 20,
            temp_min: 18,
            temp_max: 22,
          },
          wind: {
            speed: 5,
          },
          weather: [
            {
              description: 'clear sky',
              icon: '01d',
            },
          ],
        },
      ],
    };

    const action = WeatherActions.getWeather({ city: 'London' });
    const expected = WeatherActions.getWeatherSuccess({
      data: [
        {
          date: '2023-08-20 12:00:00',
          temp: 20,
          wind: 5,
          description: 'clear sky',
          icon: '01d',
          minTemp: 18,
          maxTemp: 22,
        },
      ],
    });

    actions$ = of(action);
    weatherService.getWeather.mockReturnValue(of(mockResponse));

    effects.loadWeather$.subscribe((result) => {
      expect(result).toEqual(expected);
      done();
    });
  });

  it('should dispatch getWeatherFailure on API error', (done) => {
    const error = new Error('API failed');
    const action = WeatherActions.getWeather({ city: 'London' });
    const expected = WeatherActions.getWeatherFailure({ error });

    actions$ = of(action);
    weatherService.getWeather.mockReturnValue(throwError(() => error));

    effects.loadWeather$.subscribe((result) => {
      expect(result).toEqual(expected);
      done();
    });
  });
});
