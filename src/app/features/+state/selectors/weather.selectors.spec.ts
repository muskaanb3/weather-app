import {
  selectWeatherState,
  selectWeatherData,
  selectLoading,
} from './weather.selectors';
import { WeatherState } from '../reducers';
import { IWeather } from '../../models';

describe('Weather Selectors', () => {
  const mockWeatherData: IWeather[] = [
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

  const mockState = {
    weather: {
      data: mockWeatherData,
      loading: true,
      loaded: false,
    },
  };

  it('should select the weather state', () => {
    const result = selectWeatherState(mockState);
    expect(result).toEqual(mockState.weather);
  });

  it('should select weather data', () => {
    const result = selectWeatherData(mockState);
    expect(result).toEqual(mockWeatherData);
  });

  it('should select loading state', () => {
    const result = selectLoading(mockState);
    expect(result).toBe(true);
  });
});
