import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductosListComponent } from './components/productos-list/productos-list.component';

//servicios
import { ProductosFormComponent } from './components/productos-form/productos-form.component';
import {ProductosService} from './services/productos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductosFormComponent,
    ProductosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
