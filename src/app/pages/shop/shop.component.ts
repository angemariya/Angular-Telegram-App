import {Component, inject} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <app-product-list
      [title]="'Luxury cars'"
      [products]="products.byGroup['cars']"
    />
    <app-product-list
      [title]="'Clothing'"
      [products]="products.byGroup['clothing']"
    />
    <app-product-list
      [title]="'Jewelry'"
      [products]="products.byGroup['jewelry']"
    />
  `
})
  
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
    this.telegram.BackButton.hide();
  }
}
