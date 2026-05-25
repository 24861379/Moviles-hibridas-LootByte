import { ProductoColor } from "./productoColor";

export interface Producto {
    id_producto: string;
    nombre_producto: string;
    codigo_producto: string;
    descripcion: string;
    foto_producto?: string;
    id_categoria_FK: string;

    producto_color?: ProductoColor[];
}