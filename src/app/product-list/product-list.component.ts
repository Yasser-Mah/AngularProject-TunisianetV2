import {Component, OnInit} from '@angular/core';
import {Product} from '../_models/product';
import {ProductService} from '../_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
  }


  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product) {
    this.productService.addToCart(product);
  }

}
