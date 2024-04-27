import { Component } from '@angular/core';
import { ProductListComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { ProductService } from './shared/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductListComponent, ProductDetailComponent, RouterModule, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [ProductService]
})
export class ProductComponent {

}
