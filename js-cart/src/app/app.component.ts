import {
  Component,
  Input,
  ViewChild,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import { Item } from './item';
import { Subscription } from 'rxjs';
import {
  singleSpaPropsSubject,
  SingleSpaProps,
} from 'src/single-spa/single-spa-props';

@Component({
  selector: 'cart-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  items: Item[] = [];
  isDarkMode: Boolean = false;
  singleSpaProps: SingleSpaProps;
  subscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      (props) => (this.singleSpaProps = props)
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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
