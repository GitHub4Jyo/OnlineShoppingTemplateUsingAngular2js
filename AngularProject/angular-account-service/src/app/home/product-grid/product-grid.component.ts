import { Component, OnInit } from '@angular/core';
import { GetStaticKeyValueService } from '../../services/get-static-key-value.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  productsList: Array<string>;

  constructor(getStaticKeyValueService: GetStaticKeyValueService) { 
    this.productsList = getStaticKeyValueService.getProductList();
  }

  ngOnInit() {
  }

}
