import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-listings/product-listings.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full'},
    { 
        path: 'product',
        loadChildren: () => import('./product/product.routes')
            .then(r => r.PRODUCT_ROUTES)
    }
];
