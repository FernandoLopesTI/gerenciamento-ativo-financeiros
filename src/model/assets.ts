export class Asset {
  id!: number;
  name?: string;
  type?: string;
  quantity?: number;
  datePaymend?:Date;
  price?:number;
  total?:number;
  currentPrice?:number;

  constructor(name?: string,
    type?: string,
    quantity?: number,
    datePaymend?:Date,
    price?:number,
    currentPrice?:number,){

    this.id = Math.round(Math.random() * 1000);
    this.name = name;
    this.type = type;
    this.datePaymend = datePaymend;
    this.price = price;
    this.currentPrice = currentPrice;
    this.quantity = quantity
    if(quantity && price)
    this.total = (quantity * price);
  }

  static new(): Asset {
    return new Asset(undefined,undefined,undefined,undefined,undefined,undefined);
  }

  calctotal(){
    if(this.quantity && this.price)
    this.total = (this.quantity * this.price);
  }

}
