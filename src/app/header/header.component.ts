import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Product} from '../_models/product';
import {ProductService} from '../_services/product.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItems: Product[];

  constructor(private productService: ProductService,
              private nzMessageService: NzMessageService) {
  }

  ngOnInit() {
    this.productService.getCartItems().subscribe(
      (data: any) => {
        this.cartItems = data;
        console.log(this.cartItems);
      }
    );
  }


  confirm(): void {
    if (this.cartItems.length > 0) {
      const total = this.cartItems.reduce((acc, val) => {
        return acc + val.price;
      }, 0);
      this.nzMessageService.info('Purchase successful: Total paid = ' + total + 'Dt');

      this.productService.confirmPayment();
    } else {
      this.nzMessageService.info('Cart is empty');

    }

  }



}
