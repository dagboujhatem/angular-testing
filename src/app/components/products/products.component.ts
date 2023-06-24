import { Component, OnInit } from '@angular/core';
import { Product, ProductResponse } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products?: Product[];
  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this._productsService.getAllProducts().subscribe(
      (response) => {
        this.products = response.products;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
