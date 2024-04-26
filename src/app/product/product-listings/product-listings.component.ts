import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { products } from '../../products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss'
})
export class ProductListComponent implements OnInit{
  products: any
  //products: any = [...products];

  constructor() {}

  ngOnInit(): void {
    this.products = products;
  }
}
