import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from '../reducers';
import { weatherFeatureStoreKey } from '../../models';

export const getWeatherState = createFeatureSelector<WeatherState>(
  weatherFeatureStoreKey
);

export const getWeatherData = createSelector(
  getWeatherState,
  (state) => state.data
);

export const isLoading = createSelector(
  getWeatherState,
  (state) => state.loading
);
