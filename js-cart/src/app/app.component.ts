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
    this.subscription = singleSpaPropsSubject.subscribe((props) => {
      this.singleSpaProps = props;
      console.log(this.singleSpaProps.store.cart);
      this.items = this.singleSpaProps.store.cart;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @ViewChild('container') container;

  @Input('mode')
  set mode(mode: string) {
    this.isDarkMode = mode == 'dark';
  }

  removeItem(item: Item, i: Number) {
    console.log(i);
    this.singleSpaProps.store.removeFromCart(item, i);
  }

  emptyCart() {
    this.singleSpaProps.store.emptyCart();
  }
}
