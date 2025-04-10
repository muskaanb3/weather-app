import { createReducer, on } from '@ngrx/store';
import { WeatherActions } from '../actions';
import { IWeather } from '../../models';

export interface WeatherState {
  data: IWeather[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: WeatherState = {
  data: [],
  loading: false,
  loaded: false,
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.getWeather, (state, { city }) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(WeatherActions.getWeatherSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
    loaded: true,
  })),
  on(WeatherActions.getWeatherFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
  }))
);
