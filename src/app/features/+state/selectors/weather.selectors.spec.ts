import {
  getWeatherState,
  getWeatherData,
  isLoading,
} from './weather.selectors';
import { IWeather, MockWeatherData } from '../../models';

describe('Weather Selectors', () => {
  const mockWeatherData: IWeather[] = MockWeatherData;

  const mockWeatherState = {
    weather: {
      data: mockWeatherData,
      loading: true,
      loaded: false,
    },
  };

  it('should select the weather state', () => {
    const result = getWeatherState(mockWeatherState);
    expect(result).toEqual(mockWeatherState.weather);
  });

  it('should select weather data', () => {
    const result = getWeatherData(mockWeatherState);
    expect(result).toEqual(mockWeatherData);
  });

  it('should select loading state', () => {
    const result = isLoading(mockWeatherState);
    expect(result).toBe(true);
  });
});
