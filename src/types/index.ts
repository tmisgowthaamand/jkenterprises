export interface Product {
  id: number;
  name: string;
  category: string;
  type: 'scrap' | 'granule';
  unit_price?: number;
  image: string;
  description?: string;
  specifications?: Record<string, string>;
  slug: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: 'scrap-seller' | 'buyer';
}

export interface Inquiry {
  id: number;
  user_id?: number;
  product_id: number;
  product: Product;
  weight: number;
  location: string;
  status: 'pending' | 'contacted' | 'completed';
  name: string;
  phone: string;
  email: string;
  created_at: string;
}

export interface Order {
  id: number;
  user_id?: number;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  payment_ref?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  created_at: string;
}

export interface OrderItem {
  product_id: number;
  product: Product;
  quantity: number;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface InquiryCartItem {
  product: Product;
  weight: number;
  pickupAddress: string;
}