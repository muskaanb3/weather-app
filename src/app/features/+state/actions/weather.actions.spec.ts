import { IWeather, MockWeatherData } from '../../models';
import { WeatherActions } from './weather.actions';

describe('WeatherActions', () => {
  it('should create Get Weather action with city name', () => {
    // Arrange + Act
    const action = WeatherActions.getWeather({ city: 'London' });

    // Assert
    expect(action.type).toBe('[weather] Get Weather');
    expect(action.city).toBe('London');
  });

  it('should create Get Weather Success action with data', () => {
    // Arrange + Act

    const data: IWeather[] = MockWeatherData;
    const action = WeatherActions.getWeatherSuccess({ data });

    // Assert
    expect(action.type).toBe('[weather] Get Weather Success');
    expect(action.data).toEqual(data);
  });

  it('should create Get Weather Failure action with error', () => {
    // Arrange + Act
    const error = new Error('Failed to fetch weather');
    const action = WeatherActions.getWeatherFailure({ error });

    // Assert
    expect(action.type).toBe('[weather] Get Weather Failure');
    expect(action.error).toBe(error);
  });
});
