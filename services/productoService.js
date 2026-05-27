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
        console.log("URI:", imageUri);
        const response = await fetch(imageUri);
        console.log("FETCH OK");
        const arrayBuffer = await response.arrayBuffer();
        console.log("ARRAY BUFFER OK");
        const fileExt = imageUri.split(".").pop() || "jpg"
        const fileName = `producto_${Date.now()}.${fileExt}`;
        const { data, error } = await supabase.storage
            .from("img_productos")
            .upload(
                fileName,
                arrayBuffer,
                {
                    contentType: "image/jpeg",
                    upsert: false,
                }
            );
        if (error) {
            console.log("ERROR STORAGE:", error);
            return null;
        }

        console.log("UPLOAD OK:", data);
        const { data: publicUrlData } = supabase.storage
            .from("img_productos")
            .getPublicUrl(fileName);

        return publicUrlData.publicUrl;

    } catch (error) {

        console.log("ERROR SUBIR IMAGEN:", error);

        return null;
    }
}

export async function crearProducto(data, image) {
    let imagenUrl = "";
    if (image) {
        const url = await subirImagen(image);
        if (!url) {
            return {
                success: false,
                error: "No se pudo subir la imagen"
            };
        }
        imagenUrl = url;
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

        if (!productoCreado) {
            return {
                success: false,
                error: "No se pudo crear el producto"
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

export async function obtenerProducto(id_producto) {
    const { data: producto, error } = await supabase
        .from("producto")
        .select("*, producto_color(*)")
        .eq("id_producto", id_producto)
        .single();

    if (error) {
        console.log("Error al obtener producto:", error);
        return null;
    }

    return producto;
}

export async function actualizarProducto(id_producto, data, image) {
    try {
        let imagenUrl = undefined;

        if (image && image.startsWith && image.startsWith("file:")) {
            const url = await subirImagen(image);
            if (!url) {
                return { success: false, error: "No se pudo subir la imagen" };
            }
            imagenUrl = url;
        }

        const updatePayload = {
            nombre_producto: data.nombre_producto,
            codigo_producto: data.codigo_producto,
            descripcion: data.descripcion,
            id_categoria_FK: data.categoria_producto,
        };

        if (imagenUrl) {
            updatePayload.foto_producto = imagenUrl;
        }

        const { error: updateError } = await supabase
            .from("producto")
            .update(updatePayload)
            .eq("id_producto", id_producto);

        if (updateError) {
            console.log("Error al actualizar producto:", updateError);
            return { success: false, error: updateError.message };
        }

        const { error: delError } = await supabase
            .from("producto_color")
            .delete()
            .eq("id_producto_FK", id_producto);

        if (delError) {
            console.log("Error al eliminar colores antiguos:", delError);
            return { success: false, error: delError.message };
        }

        const { error: insertColorError } = await supabase
            .from("producto_color")
            .insert([
                {
                    id_producto_FK: id_producto,
                    id_color_FK: data.colores_producto,
                    stock: Number(data.stock_producto),
                    precio: Number(data.precio_producto),
                }
            ]);

        if (insertColorError) {
            console.log("Error al insertar color actualizado:", insertColorError);
            return { success: false, error: insertColorError.message };
        }

        return { success: true };
    } catch (error) {
        console.log("Error actualizarProducto:", error);
        return { success: false, error };
    }
}

export async function eliminarProducto(id_producto) {
    const { error: errorProductoColor } = await supabase
        .from("producto_color")
        .delete()
        .eq("id_producto_FK", id_producto);

    if (errorProductoColor) {
        console.log("Error al eliminar colores del producto:", errorProductoColor);
        return {
            success: false,
            error: errorProductoColor.message || "No se pudo eliminar los colores del producto"
        };
    }

    const { error } = await supabase
        .from("producto")
        .delete()
        .eq("id_producto", id_producto);

    if (error) {
        console.log("Error al eliminar producto:", error);
        return {
            success: false,
            error: error.message || "No se pudo eliminar el producto"
        };
    }

    return { success: true };
}
