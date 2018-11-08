import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // utility functions
  const createStack = function(fixture, compiled) {
    const createStackInput = compiled.querySelector('input[name="stackSize"]');
    const createStackBtn = compiled.querySelector('button[name="createStackBtn"]');
    return sendInput(fixture, createStackInput, '21').then(
      () => createStackBtn.click());
  };
  const sendInput = function(fixture, inputElement, text: string) {
    inputElement.value = text;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    return fixture.whenStable();
  }


  it(`should create a new stack without error`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    createStack(fixture, compiled);
  }));

  it(`should push without error`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    createStack(fixture, compiled).then(() => {
      const input = compiled.querySelector('input[name="pushValue"]');
      const pushBtn = compiled.querySelector('button[name="pushBtn"]');
      sendInput(fixture, input, '21').then(
        () => pushBtn.click());
    });
  }));

  it(`should pop correctly without error`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    createStack(fixture, compiled).then(() => {
      const pushInput = compiled.querySelector('input[name="pushValue"]');
      const pushBtn = compiled.querySelector('button[name="pushBtn"]');
      sendInput(fixture, pushInput, '21').then(
        () => {
          pushBtn.click();
          const popBtn = compiled.querySelector('button[name="popBtn"]');
          popBtn.click();
          fixture.detectChanges();
          const poppedEl = compiled.querySelector('#popped_value');
          expect(poppedEl.innerHTML).toContain(21);
        });
    });
  }));

  // TODO: Test display()
  // ...
});
