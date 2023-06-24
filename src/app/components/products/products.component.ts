import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductResponse } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products?: Product[];
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this._route.data.subscribe(
      (data: {response?: ProductResponse}) => {
        console.log(data?.response?.total)
        this.products = data?.response?.products;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
