import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterPipe } from './product-list/product-filter.pipe';
import { StarComponent } from './star/star.component'
import {ProductService} from './product-list/productservice.service';

import { ProductDetailComponent } from './product-detail/product-detail.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'products', component: ProductListComponent},
      {path:'products/:id', component: ProductDetailComponent},
      // {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo:'products',pathMatch: 'full'},//   empty 
      {path:'**', redirectTo:'products',pathMatch: 'full'} //Wild card route used when any other irrelevent text is typed in route
    ])
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
