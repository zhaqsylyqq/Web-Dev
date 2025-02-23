import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import {Product} from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NgFor, NgIf, ProductItemComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ['Electronics', 'Clothing', 'HomeAppliances', 'Books'];
  selectedCategory: string | null = null;

  productsByCategory: { [key: string]: Product[] } = {
    Electronics: [
      { name: 'iPad Pro 12.9"', description: 'Флагманский iPad', imageUrls: ['assets/ipad.jpeg'], rating: 4.8, link: 'https://example.com/ipad', likes: 0 },
      { name: 'MacBook Pro', description: 'Мощный MacBook', imageUrls: ['assets/macbook.jpeg'], rating: 4.9, link: 'https://example.com/macbook', likes: 0 },
      { name: 'Sony WH-1000XM5', description: 'Шумоподавляющие наушники', imageUrls: ['assets/headphones.jpeg'], rating: 4.7, link: 'https://example.com/headphones', likes: 0 },
      { name: 'Samsung Galaxy S24', description: 'Флагманский смартфон', imageUrls: ['assets/galaxy.jpeg'], rating: 4.6, link: 'https://example.com/galaxy', likes: 0 },
      { name: 'GoPro Hero 12', description: 'Экшн-камера для путешествий', imageUrls: ['assets/gopro.jpeg'], rating: 4.5, link: 'https://example.com/gopro', likes: 0 }
    ],
    Clothing: [
      { name: 'Футболка Nike', description: 'Классическая футболка', imageUrls: ['assets/tshirt.jpeg'], rating: 4.5, link: 'https://example.com/tshirt', likes: 0 },
      { name: 'Кроссовки Adidas', description: 'Стильные кроссовки', imageUrls: ['assets/shoes.jpeg'], rating: 4.6, link: 'https://example.com/shoes', likes: 0 },
      { name: 'Куртка The North Face', description: 'Теплая зимняя куртка', imageUrls: ['assets/jacket.jpeg'], rating: 4.8, link: 'https://example.com/jacket', likes: 0 },
      { name: 'Джинсы Levis', description: 'Классические джинсы', imageUrls: ['assets/jeans.jpeg'], rating: 4.7, link: 'https://example.com/jeans', likes: 0 },
      { name: 'Рюкзак Fjällräven', description: 'Удобный городской рюкзак', imageUrls: ['assets/backpack.jpeg'], rating: 4.9, link: 'https://example.com/backpack', likes: 0 }
    ],
    HomeAppliances: [
      { name: 'Робот-пылесос Xiaomi', description: 'Автоматическая уборка', imageUrls: ['assets/robot-vacuum.jpeg'], rating: 4.6, link: 'https://example.com/robot-vacuum', likes: 0 },
      { name: 'Кофемашина DeLonghi', description: 'Ароматный эспрессо', imageUrls: ['assets/coffee-machine.jpeg'], rating: 4.8, link: 'https://example.com/coffee-machine', likes: 0 },
      { name: 'Умный чайник Xiaomi', description: 'Контроль температуры', imageUrls: ['assets/kettle.jpeg'], rating: 4.5, link: 'https://example.com/kettle', likes: 0 },
      { name: 'Микроволновка Samsung', description: 'Быстрое разогревание', imageUrls: ['assets/microwave.jpeg'], rating: 4.7, link: 'https://example.com/microwave', likes: 0 },
      { name: 'Стиральная машина LG', description: 'Современная стирка', imageUrls: ['assets/washing-machine.jpeg'], rating: 4.9, link: 'https://example.com/washing-machine', likes: 0 }
    ],
    Books: [
      { name: '1984 - Джордж Оруэлл', description: 'Антиутопия о тоталитаризме', imageUrls: ['assets/1984.jpeg'], rating: 4.9, link: 'https://example.com/1984', likes: 0 },
      { name: 'Мастер и Маргарита', description: 'Классика русской литературы', imageUrls: ['assets/master.jpeg'], rating: 4.8, link: 'https://example.com/master', likes: 0 },
      { name: 'Sapiens - Юваль Ной Харари', description: 'История человечества', imageUrls: ['assets/sapiens.jpeg'], rating: 4.7, link: 'https://example.com/sapiens', likes: 0 },
      { name: 'Подсознание может всё', description: 'Как изменить мышление', imageUrls: ['assets/subconscious.jpeg'], rating: 4.6, link: 'https://example.com/subconscious', likes: 0 },
      { name: 'Atomic Habits - Джеймс Клир', description: 'Как формировать привычки', imageUrls: ['assets/atomic-habits.jpeg'], rating: 4.9, link: 'https://example.com/atomic-habits', likes: 0 }
    ]
  };


  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getProductsByCategory(): Product[] {
    return this.productsByCategory?.[this.selectedCategory!] || [];
  }

  removeProduct(product: Product) {
    if (this.selectedCategory) {
      this.productsByCategory[this.selectedCategory] = this.productsByCategory[this.selectedCategory].filter(p => p !== product);
    }
  }

}
