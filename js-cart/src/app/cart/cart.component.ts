import { Component, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items: Item[] = [];

  constructor() {}

  @Input('mode')
  set mode(mode: string) {}

  @Input('cartItems')
  set cartItems(items: string) {
    this.items = JSON.parse(items);
  }

  removeItem(item: Item) {
    const removeEvent = new CustomEvent('cartItemRemoved', {
      bubbles: true,
      composed: true,
      detail: {
        product: item,
      },
    });
    this.container.nativeElement.dispatchEvent(removeEvent);
  }
}
