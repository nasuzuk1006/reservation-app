import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-listings/product-listings.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductListComponent, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.product = this.productService.getProductById(params.get('productId')!)
      const productObservable = this.productService.getProductById(params.get('productId')!)
      productObservable.subscribe({
        next: (data) => { this.product = data },
        error: (err) => { console.error('次のエラーが発生しました：' + err) }
      })
    })
  }
}
