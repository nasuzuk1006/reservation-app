import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss'
})
export class ProductListComponent implements OnInit{
  products: any

  constructor(private productService: ProductService) {}

  ngOnInit(): void {

    const productObservable = this.productService.getProducts()
    productObservable.subscribe({
      next: (data) => { this.products = data },
      error: (err) => { console.error('次のエラーが発生しました：' + err) }
    })

  }
}
