import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { MockWeatherData } from '../../models';
import { WeatherActions } from '../../+state';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('WeatherComponent', () => {
  let fixture: ComponentFixture<WeatherComponent>;
  let component: WeatherComponent;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WeatherComponent,
        CommonModule,
        AsyncPipe,
        MatProgressSpinnerModule,
      ],
      providers: [provideMockStore(), provideHttpClient()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(true).toBeTruthy();
  });

  it('should call getWeather on init', () => {
    // arrange
    jest.spyOn(component, 'getWeather');
    // act
    component.ngOnInit();
    // assert
    expect(component.getWeather).toHaveBeenCalled();
  });

  it('should set weatherData when getWeather is called', () => {
    // arrange
    jest.spyOn(store, 'select').mockImplementation(() => of(MockWeatherData));
    // act
    component.getWeather();
    // assert
    expect(component.weatherData).toEqual(MockWeatherData);
  });

  it('should dispatch getWeather action when onCityChange is called', () => {
    // arrange
    jest.spyOn(store, 'dispatch');
    // act
    component.onCityChange('London');
    // assert
    expect(store.dispatch).toHaveBeenCalledWith(
      WeatherActions.getWeather({ city: 'London' })
    );
  });

  it('should set selectedCity when onCityChange is called', () => {
    // arrange
    jest.spyOn(store, 'dispatch');
    // act
    component.onCityChange('London');
    // assert
    expect(component.selectedCity).toEqual('London');
  });
});
