export interface Product {
  _id: string;
  title: string;
  type: string;
  image: string;
  price: number;
  discount?: number;
  rating?: number;
  shortDescription: string;
  longDescription: string;
  additionalInfo?: string;
}
