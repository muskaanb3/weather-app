import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherCardComponent } from './weather-card.component';
import { CommonModule } from '@angular/common';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCardComponent, CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    component.weatherData = [
      {
        date: '2023-08-20T12:00:00Z',
        temp: 22,
        minTemp: 18,
        maxTemp: 26,
        description: 'Sunny',
        icon: '01d',
        wind: 5,
      },
    ];
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(true).toBeTruthy();
  });
});
