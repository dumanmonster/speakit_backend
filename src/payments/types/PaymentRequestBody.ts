import { Product } from './Product';

export interface PaymentRequestBody {
  product: Product;
  currency: string;
}
