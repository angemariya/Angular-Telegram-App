import { group } from '@angular/animations';
import { Injectable } from '@angular/core';

export enum IProductGroup {
  clothing = "clothing",
  jewelry = "jewelry",
  electronics = "electronics",
  cars = "cars",
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: IProductGroup;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const products: IProduct[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: IProductGroup.clothing,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    }
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: IProductGroup.clothing,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband or son in this Thanksgiving or Christmas Day.",
    category: IProductGroup.clothing,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: IProductGroup.jewelry,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Audi RS6",
    price: 120000,
    description:
      "The Audi RS6, a high-performance sportback, combines luxurious design with powerful performance. Featuring a dynamic engine, advanced technology, and a stylish exterior, the RS6 offers an unparalleled driving experience.",
    category: IProductGroup.cars,
    image: "https://images.pexels.com/photos/4935644/pexels-photo-4935644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with the actual image URL
    rating: {
      rate: 4.8, 
      count: 150,
    },
  }
]

@Injectable({
  providedIn: 'root'
})
  
export class ProductsService {
  readonly products: IProduct[] = products;

  getById(id: number) {  
    return this.products.find(product => product.id === id);
  }

  get byGroup() {
    return this.products.reduce((group: { [key: string]: IProduct[] }, product) => {
      if (!group[product.category]) {
        group[product.category] = [];
      }
      group[product.category].push(product);
      return group;
    }, {});
  }

}
