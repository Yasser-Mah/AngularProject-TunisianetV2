export class Product {


  constructor(id: number, title: string, description: string, url: string, quantity: number, price: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.url = url;
    this.quantity = quantity;
    this.price = price;
  }

  id: number;
  title: string;
  description: string;
  url: string;
  quantity: number;
  price: number;
}
