import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Item } from '../item';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CartComponent {
  items: Item[] = [];
  isDarkMode: Boolean = false;

  constructor() {}

  @ViewChild('container') container;

  @Input('mode')
  set mode(mode: string) {
    this.isDarkMode = mode == 'dark';
  }

  @Input('cartItems')
  set cartItems(items: string) {
    this.items = JSON.parse(items);
  }

  removeItem(item: Item, i: Number) {
    console.log(i);
    const removeEvent = new CustomEvent('cartItemRemoved', {
      bubbles: true,
      composed: true,
      detail: {
        index: i,
        product: item,
      },
    });
    this.container.nativeElement.dispatchEvent(removeEvent);
  }

  emptyCart() {
    this.items.length = 0;
    const paidEvent = new CustomEvent('paid', {
      bubbles: true,
      composed: true,
    });
    this.container.nativeElement.dispatchEvent(paidEvent);
  }
}
