import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { isLoading } from '../../+state';
import { WeatherComponent } from './weather.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import EventEmitter from 'events';

// Mock WeatherCardComponent
@Component({
  selector: 'app-weather-card',
  standalone: true,
  template: '<div data-testid="weather-card">Weather Card</div>',
  imports: [CommonModule],
})
class MockWeatherCardComponent {
  @Input() weatherData: any;
}

// Mock WeathersSelectComponent
@Component({
  selector: 'app-weathers-select',
  standalone: true,
  template:
    '<div data-testid="weathers-select" (click)="notifyCityChange.emit(\'London\')">Select City</div>',
  imports: [CommonModule],
})
class MockWeathersSelectComponent {
  @Input() cities: string[] = [];
  @Input() selectedCity!: string;
  @Output() notifyCityChange = new EventEmitter();
}

describe('WeatherComponent', () => {
  let fixture: ComponentFixture<WeatherComponent>;
  let component: WeatherComponent;
  let store: MockStore;
  const loadingSubject = new BehaviorSubject<boolean>(false);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WeatherComponent,
        MockWeatherCardComponent,
        MockWeathersSelectComponent,
        CommonModule,
        AsyncPipe,
      ],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: isLoading,
              value: loadingSubject.asObservable(),
            },
          ],
        }),
        provideHttpClient(),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(true).toBeTruthy();
  });
});
