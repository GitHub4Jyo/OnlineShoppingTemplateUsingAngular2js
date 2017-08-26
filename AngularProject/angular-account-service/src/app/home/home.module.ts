import { BrowserModule } from '@angular/platform-browser';   // 1 <<== Import BrowserModule

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { ImgHeaderComponent } from './img-header/img-header.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { FooterComponent } from './footer/footer.component';

//services
import { GetStaticKeyValueService } from '../services/get-static-key-value.service';


@NgModule({
  imports: [
    BrowserModule,    // 2 <<== Add BroswerModule to NgModule imports
    CommonModule
    
  ],
  providers: [GetStaticKeyValueService],   // <<== We need to add services in providers field.
  declarations: [HomeComponent, SideMenuComponent, ImgHeaderComponent, ProductGridComponent, FooterComponent],
  bootstrap: [HomeComponent]   // 3 <<== Add HomeComponent to bootstrap to render page.
})
export class HomeModule { }
