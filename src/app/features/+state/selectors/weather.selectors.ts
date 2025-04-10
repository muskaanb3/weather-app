import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from '../reducers';

export const selectWeatherState =
  createFeatureSelector<WeatherState>('weather');

export const selectWeatherData = createSelector(
  selectWeatherState,
  (state) => state.data
);

export const selectLoading = createSelector(
  selectWeatherState,
  (state) => state.loading
);
