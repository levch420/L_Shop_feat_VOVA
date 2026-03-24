import 'express-session';

declare module 'express-session' {
  interface SessionData {
    cart?: Array<{
      productId: number;
      title: string;
      price: number;
      quantity: number;
    }>;
  }
}
