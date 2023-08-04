import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { HeaderComponent } from './components/header/header.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SearchPipe } from './pipes/search.pipe';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    CardProductComponent,
    HeaderComponent,
    OrdersComponent,
    SearchPipe,
    SearchInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
