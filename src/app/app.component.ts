import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Learning Project';
  isVisible = true;
  counter = 0;
  userName = '';

  constructor(public counterService: CounterService) {}

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  incrementCounter() {
    this.counter++;
  }
}
