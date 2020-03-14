import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templet/header/header/header.component';
import { FooterComponent } from './templet/footer/footer/footer.component';
import { ProductComponent} from './products/product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {AdminRouteModule} from './products/admin-route/admin-route.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
 
    DashboardComponent,
 
    ProductComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
