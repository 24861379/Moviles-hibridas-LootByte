import { supabase } from "../lib/supabase";

export async function obtenerProductos() {
    const { data: productos, error: errorProductos } = await supabase
        .from("producto")
        .select("*");

    if (errorProductos) {
        console.log(errorProductos);
        return [];
    }

    if (!productos || productos.length === 0) {
        return [];
    }

    const productoIds = productos.map((producto) => producto.id_producto);
    const { data: colores, error: errorColores } = await supabase
        .from("producto_color")
        .select("*")
        .in("id_producto_FK", productoIds);

    if (errorColores) {
        console.log(errorColores);
        return productos;
    }

    const productoColorMap = colores.reduce((acc, item) => {
        const key = item.id_producto_FK;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});

    return productos.map((producto) => ({
        ...producto,
        producto_color: productoColorMap[producto.id_producto] || [],
    }));
}

async function subirImagen(imageUri) {
    try {
        const response = await fetch(imageUri);
        const arrayBuffer = await response.arrayBuffer();
        const fileName = `producto_${Date.now()}.jpg`;

        const { error} = await supabase.storage
            .from("img_productos")
            .upload(fileName, arrayBuffer, {
                contentType: "image/jpeg",
            });
        if (error) {
            console.log(error);
            return null;
        }

        const { data } = supabase.storage
            .from("img_productos")
            .getPublicUrl(fileName);

        return data.publicUrl;
    } catch (error) {
        console.log("Error:", error);
        return null;
    }
}

export async function crearProducto(data, image) {
    let imagenUrl = "";
    if (image) {
        const url = await subirImagen(image);
        if (url) {
            imagenUrl = url;
        }
    }
    try {
        const { data: productoCreado, error } = await supabase
            .from("producto")
            .insert([
                {
                    nombre_producto: data.nombre_producto,
                    codigo_producto: data.codigo_producto,
                    descripcion: data.descripcion,
                    id_categoria_FK: data.categoria_producto,
                    foto_producto: imagenUrl,
                }
            ])
            .select()
            .single();
        
        if (error) {
            console.log("Error al crear producto:", error);
            return {
                success: false,
                error: error.message || "No se pudo crear el producto"
            };
        }

        const { error: errorProductoColor } = await supabase
            .from("producto_color")
            .insert([
                {
                    id_producto_FK: productoCreado.id_producto,
                    id_color_FK: data.colores_producto,
                    stock: Number(data.stock_producto),
                    precio: Number(data.precio_producto),
                }
            ]);

        if (errorProductoColor) {
            console.log(errorProductoColor);
            return {
                success: false,
                error: errorProductoColor.message
            };
        }

        return {
            success: true
        };
    } catch (error) {
        console.log("Error:", error);
        return { success: false, error: error };
    }
}

export async function obtenerProducto(id) {
    const { data: producto, error: errorProducto } = await supabase
        .from("producto")
        .select("*")
        .eq("id_producto", id)
        .single();

    if (errorProducto) {
        console.log(errorProducto);
        return null;
    }

    const { data: colores, error: errorColores } = await supabase
        .from("producto_color")
        .select("*")
        .eq("id_producto_FK", id);

    if (errorColores) {
        console.log(errorColores);
        return { ...producto, producto_color: [] };
    }

    return { ...producto, producto_color: colores || [] };
}
