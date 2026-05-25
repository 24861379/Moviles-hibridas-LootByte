import { Producto } from "./producto";
import { Color } from "./color";

export interface ProductoColor {
    id_producto_color: string;
    id_producto_FK: string;
    id_color_FK: string;
    stock: number;
    precio: number;

    producto?: Producto;
    color?: Color;
}