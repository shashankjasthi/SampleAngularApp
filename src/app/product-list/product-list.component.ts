import { Component, OnInit } from '@angular/core';
import {IProduct} from '../product-list/product'
import {ProductService} from './productservice.service'


@Component({
  selector: 'app-product-list',
  moduleId : module.id,// to use absolute paths for below URLs
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {   //Oninit interface is implemented (lifecycle hook)

  title: string = 'Acme Product Management';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = '';  // search string of products
  errorMessage: string;
  
  products: IProduct[];

   constructor(private _prodcutService : ProductService) { 


   }

toggleImage():void{
  this.showImage = !this.showImage;
}
 

  ngOnInit() {
      this._prodcutService.getProducts().subscribe(products => this.products = products
                                                   ,error => this.errorMessage = <any> error);
  }
// Implementing the only Method of lifecycle hook - Oninit

onRatingClicked(message: string):void{
this.title = 'Product List : '+ message;
}
}