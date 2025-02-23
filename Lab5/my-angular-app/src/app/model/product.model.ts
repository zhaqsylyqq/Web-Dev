export interface Product {
  name: string;
  description: string;
  imageUrls: string[];
  rating: number;
  link: string;
  likes: number;
  liked?: boolean;
}

