import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'
import {ProductService} from './product-list/productservice.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent {
  title = 'Acme Product Management';
}
