import { Component, OnInit } from '@angular/core';

// 1 <<== Import the service
import { GetStaticKeyValueService } from '../../services/get-static-key-value.service';

@Component({
  selector: 'app-img-header',
  templateUrl: './img-header.component.html',
  styleUrls: ['./img-header.component.css']
})
export class ImgHeaderComponent implements OnInit {
  
  imgHeader: string;

  // 3 <<== Pass newly created service as argument to constructor
  constructor(getStaticKeyValueService: GetStaticKeyValueService) {    
    this.imgHeader = getStaticKeyValueService.getImgHeader();
      
   }

  ngOnInit() {
  }

}
