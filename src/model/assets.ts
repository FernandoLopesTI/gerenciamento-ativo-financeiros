export class Asset {
  id!: number;
  name!: string;
  type!: string;
  quantity!: number;
  datePaymend!:Date;
  price!:number;
  currentPrice?:number;

  constructor(name: string,
    type: string,
    quantity: number,
    datePaymend:Date,
    price:number,
    currentPrice:number,){

    this.id = Math.round(Math.random() * 1000);
    this.name = name;
    this.type = type;
    this.datePaymend = datePaymend;
    this.price = price;
    this.currentPrice = currentPrice;
  }

  static new(): Asset {
    return new Asset('','',0,new Date(),0,0);
  }

}
