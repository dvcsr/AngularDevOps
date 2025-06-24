import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  currentCount = 0;

  increment() {
    this.currentCount++;
  }

  decrement() {
    this.currentCount--;
  }
}
