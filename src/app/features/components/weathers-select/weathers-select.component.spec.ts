import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathersSelectComponent } from './weathers-select.component';

describe('WeathersSelectComponent', () => {
  let component: WeathersSelectComponent;
  let fixture: ComponentFixture<WeathersSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeathersSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeathersSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
