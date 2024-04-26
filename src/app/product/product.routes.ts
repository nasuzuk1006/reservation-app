import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-listings/product-listings.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductComponent } from "./product.component";

export const PRODUCT_ROUTES: Routes = [
  { 
    path: '', 
    component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent},
      { path: 'detail/:productId', component: ProductDetailComponent}
    ]
  },
];