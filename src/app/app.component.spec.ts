import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  describe('Basic Jest Test', () => {
    it('should run basic test', () => {
      expect(true).toBe(true);
    });
  });
});
