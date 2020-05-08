import { Component, HostListener } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  items: Item[] = [];

  constructor() {}

  removeItem(item) {}
}
