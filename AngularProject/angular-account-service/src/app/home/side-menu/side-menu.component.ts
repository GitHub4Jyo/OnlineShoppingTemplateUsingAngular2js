import { Component, OnInit } from '@angular/core';

//services
import { GetStaticKeyValueService } from '../../services/get-static-key-value.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  logoPath: string;

  constructor(getStaticKeyValueService: GetStaticKeyValueService) {
    this.logoPath = getStaticKeyValueService.getLogo();
   }

  ngOnInit() {
  }

}
