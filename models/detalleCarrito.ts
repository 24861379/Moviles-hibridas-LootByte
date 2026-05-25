import { ProductoColor } from "./productoColor";

export interface DetalleCarrito {
    id_detalle_carrito: string;
    id_carrito_FK: string;
    id_producto_color_FK: string;
    fecha_creacion: Date;
    cantidad: number;
    
    ProductoColor?: ProductoColor;
}