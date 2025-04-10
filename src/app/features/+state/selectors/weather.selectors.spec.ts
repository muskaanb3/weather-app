import {
  selectWeatherState,
  selectWeatherData,
  selectLoading,
} from './weather.selectors';
import { WeatherState } from '../reducers';
import { IWeather, MockWeatherData } from '../../models';

describe('Weather Selectors', () => {
  const mockWeatherData: IWeather[] = MockWeatherData;

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
