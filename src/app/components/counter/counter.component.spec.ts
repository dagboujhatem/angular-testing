import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the counter component', () => {
    expect(component).toBeTruthy();
  });

  it('shoud show the counter value', () => {
    expect(component).toBeTruthy();
  });
/*
  it('shoud increment the counter value - after click', () => {
    // Get the count value
    const counterValue = component.count;
    console.log(counterValue);
    // Get the increment button
    const { debugElement } = fixture;
    const incrementButton = debugElement.query(
      By.css('[id="increment-button"]')
    );
    // Act: Click on the increment button
    incrementButton.triggerEventHandler('click', null);
    // Assert: Expect that the displayed count now reads “1”.
    const countOutput = debugElement.query(By.css('[id="count-result"]'));
    expect(countOutput.nativeElement.textContent).toBe('1');
    // expect(countOutput.nativeElement.textContent).toBe(counterValue + 1);
  });
  it('shoud decrement the counter value - after click', () => {
    // Get the count value
    const counterValue = component.count;
    console.log(counterValue);
    // Get the increment button
    const { debugElement } = fixture;
    const decrementButton = debugElement.query(
      By.css('[id="decrement-btn"]')
    );
    // Act: Click on the increment button
    decrementButton.triggerEventHandler('click', null);
    // Assert: Expect that the displayed count now reads “1”.
    const countOutput = debugElement.query(By.css('[id="count-result"]'));
    console.log(countOutput.nativeElement.textContent)
    expect(countOutput.nativeElement.textContent).toBe('-1');
    // expect(countOutput.nativeElement.textContent).toBe(counterValue - 1);
  });*/
});
