import { weatherReducer, initialState, WeatherState } from './weather.reducer';
import { WeatherActions } from '../actions';
import { IWeather } from '../../models';

describe('WeatherReducer', () => {
  it('should return initial state when passed an unknown action', () => {
    const action = { type: 'Unknown' } as any;
    const state = weatherReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should set loading true on getWeather', () => {
    const action = WeatherActions.getWeather({ city: 'London' });
    const state = weatherReducer(initialState, action);

    expect(state.loading).toBe(true);
    expect(state.loaded).toBe(false);
    expect(state.data).toEqual([]);
  });

  it('should set data and flags on getWeatherSuccess', () => {
    const mockData: IWeather[] = [
      {
        date: '2023-08-20 12:00:00',
        temp: 20,
        wind: 5,
        description: 'clear sky',
        icon: '01d',
        minTemp: 18,
        maxTemp: 22,
      },
    ];

    const action = WeatherActions.getWeatherSuccess({ data: mockData });
    const state = weatherReducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.loaded).toBe(true);
    expect(state.data).toEqual(mockData);
  });

  it('should set loading false and loaded false on getWeatherFailure', () => {
    const action = WeatherActions.getWeatherFailure({
      error: new Error('API error'),
    });
    const state = weatherReducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.loaded).toBe(false);
    expect(state.data).toEqual([]);
  });
});
