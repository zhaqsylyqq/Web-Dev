import { Component, Input } from '@angular/core';
import { Product } from '../model/product.model';
import {ProductItemComponent} from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [
    ProductItemComponent, CommonModule
  ],
  standalone: true,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
}

