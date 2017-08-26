import { Injectable } from '@angular/core';

@Injectable()
export class GetStaticKeyValueService {
  imgpath : string;

  getLogo() : string {
     return this.imgpath + "logo.jpg";
   } 
  
  getImgHeader() : string {
     return this.imgpath + "jeans.jpg";
   }

  getProductList() : Array<string> {
    return [this.imgpath + 'jeans1.jpg',this.imgpath + 'jeans2.jpg',this.imgpath + 'jeans3.jpg',this.imgpath + 'jeans4.jpg',
      this.imgpath + 'jeans4.jpg',this.imgpath + 'jeans3.jpg',this.imgpath + 'jeans2.jpg',this.imgpath + 'jeans1.jpg'];
  }
  
  constructor() { 
    this.imgpath = "/assets/images/"
  }

}
