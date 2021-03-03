import { Component, OnInit, HostBinding } from '@angular/core';

import {ProductosService} from'../../services/productos.service';
import {Producto} from 'src/app/models/Producto';


@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {
  @HostBinding('class') classes ='row'
  productos: any =[];

  constructor(private productoService:ProductosService) { }

  ngOnInit(){
   this.getProductos();
  }
  
  getProductos(){
    this.productoService.getProductos()
    .subscribe(
      res =>{
        this.productos =res;
      },
      err=> console.error(err)
    );

  }
    

    deleteProducto(id: string){
      this.productoService.deleteProducto(id)
      .subscribe(
        res=>{
          console.log(res);
          this.getProductos();
        },
        err=> console.log(err)
      )
    }

    


}
