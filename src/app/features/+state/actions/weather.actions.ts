import { createActionGroup, props } from '@ngrx/store';
import { IWeather, weatherFeatureStoreKey } from '../../models';

export const WeatherActions = createActionGroup({
  source: weatherFeatureStoreKey,
  events: {
    'Get Weather': props<{ city: string }>(),
    'Get Weather Success': props<{ data: IWeather[] }>(),
    'Get Weather Failure': props<{ error: Error }>(),
  },
});
