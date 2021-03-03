import {Title} from'@angular/platform-browser';

export interface Producto{
    id?: number,
    nombre?: string,
    descripcion?: string,
    precio?: number,
    cantidad?: number,
    foto?: string,
    created_at?:Date

};

