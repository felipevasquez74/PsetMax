import { Component, HostBinding, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';

import {ProductosService} from 'src/app/services/productos.service';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  @HostBinding('class') clases= 'row';

  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion:'',
    precio: 0,
    cantidad: 0,
    foto: '',
    created_at: new Date()

  };
  edit: boolean=false;

  constructor(private productoService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id) {
      this.productoService.getProducto(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.producto=res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewProducto(){
    delete this.producto.id;
    delete this.producto.created_at;
    
    this.productoService.saveProducto(this.producto)
    .subscribe(
    res=>{  
        console.log(res);
        this.router.navigate(['/productos']);
    },
    err=> console.error(err)
    )
  }

  updateProducto(){
      delete this.producto.created_at;
      this.productoService.updateProducto(this.producto.id!,this.producto)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/productos'])
        },
        err =>console.log(err)
      )
  }
}
