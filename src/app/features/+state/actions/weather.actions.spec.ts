import { IWeather, MockWeatherData } from '../../models';
import { WeatherActions } from './weather.actions';

describe('WeatherActions', () => {
  it('should create Get Weather action with city name', () => {
    const action = WeatherActions.getWeather({ city: 'London' });
    expect(action.type).toBe('[weather] Get Weather');
    expect(action.city).toBe('London');
  });

  it('should create Get Weather Success action with data', () => {
    const data: IWeather[] = MockWeatherData;
    const action = WeatherActions.getWeatherSuccess({ data });

    expect(action.type).toBe('[weather] Get Weather Success');
    expect(action.data).toEqual(data);
  });

  it('should create Get Weather Failure action with error', () => {
    const error = new Error('Failed to fetch weather');
    const action = WeatherActions.getWeatherFailure({ error });

    expect(action.type).toBe('[weather] Get Weather Failure');
    expect(action.error).toBe(error);
  });
});
