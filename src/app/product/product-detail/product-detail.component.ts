import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-listings/product-listings.component';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: any | undefined;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')!]
    })
  }
}
