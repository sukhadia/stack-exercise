import {Component, Input} from '@angular/core';
import {Stack} from "./stack";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stack-exercise3';

  private stack: Stack;
  stackSize: number;
  pushValue: number;
  top: number;
  popped: number;
  isEmpty: boolean;
  isFull: boolean;

  constructor() {

  }

  ngOnInit() {

  }
  reset() {
    this.isEmpty = false;
    this.isFull = false;
  }

  createStack() {
    this.stack = new Stack(this.stackSize);
    this.reset();
  }

  push() {
    try {
      this.stack.push(this.pushValue);
      this.isFull = false;
    } catch(e) {
      if (e.message === this.stack._full_message) {
        this.isFull = true;
      }
    } finally {
      this.isEmpty = false;
    }
  }

  pop() {
    try {
      this.popped = this.stack.pop();
      this.isEmpty = false;
    } catch(e) {
      if (e.message === this.stack._empty_message) {
        this.isEmpty = true;
        this.popped = undefined;
      }
    } finally {
      this.isFull = false;
    }
  }

  display() {
    try {
      this.top = this.stack.peek();
      this.isEmpty = false;
    } catch(e) {
      if (e.message === this.stack._empty_message) {
        this.isEmpty = true;
        this.top = undefined;
      }
    }
  }

}
