import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct, ProductsService } from '../../services/products.service';
import { TelegramService } from '../../services/telegram.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="centered">
    <h2 class="mb">
      {{ product.title }}
    </h2>
    <div class="product-image">
      <img [src]="product.image" [alt]="product.title"/>
    </div>
    <div class="product-info">
      <p class="hint">{{ product.description }}</p>
      <p class="price">{{ product.price | currency: "EUR"}}</p>
    </div>
</div>
  `
})
export class ProductComponent {
  product: IProduct;

  constructor(
    private products: ProductsService,
    private telegram: TelegramService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.getById(Number(id));
  }
}
