import { Component, Input } from '@angular/core';
import { IProduct } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2 class="heading">{{ title }}</h2>
    <ul>
      @for (product of products; track product.id) {
        <li class="product-item" [routerLink]="'/product/' + product.id">
          <div class="product-image">
            <img [src]="product.image" [alt]="product.title"/>
          </div>
          <div class="product-info">
             <h3 class="product-title">{{product.title}}</h3>
             <p class="hint">{{ product.description }}</p>
             <p class="price">{{ product.price | currency: "EUR"}}</p>
          </div>
        </li>
      }
    </ul>
  `
})
export class ProductListComponent {
  @Input() title: string = "Product List";
  @Input() products: IProduct[] = [];

}
