import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  standalone: true,
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {
  @Input() product!: Product;
  @Output() productRemoved = new EventEmitter<Product>();

  likeProduct() {
    if (this.product.liked) {
      this.product.likes--;
    } else {
      this.product.likes++;
    }
    this.product.liked = !this.product.liked;
  }


  shareOnWhatsApp() {
    window.open(`https://wa.me/?text=${encodeURIComponent(this.product.link)}`, '_blank');
  }

  shareOnTelegram() {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`, '_blank');
  }

  removeProduct() {
    this.productRemoved.emit(this.product);
  }
}
