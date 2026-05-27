import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useRouter } from "expo-router";

import HeaderBusqueda from "../../components/headers/headerBusqueda";
import ProductoCard from "../../components/productoCard";

import { Producto } from "../../models/producto";
import { obtenerProductos } from "../../services/productoService";
import { addToCart } from "../../services/cartService";

export default function Home() {
    const router = useRouter();

    const [productos, setProductos] = useState<Producto[]>([]);

    async function cargarProductos() {
        const data = await obtenerProductos();
        setProductos(data);
    }

    useEffect(() => {
        cargarProductos();
    }, []);

    return (
        <View style={{ flex: 1, padding: 10 }}>

            <HeaderBusqueda />

            <FlatList
                data={productos}
                keyExtractor={(item) => item.id_producto.toString()}
                renderItem={({ item }) => (
                    <ProductoCard
                        producto={item}
                        onPress={() => router.push(`/producto/${item.id_producto}`)}
                        onAddToCart={() => {
                            addToCart({
                                id_producto: item.id_producto,
                                nombre_producto: item.nombre_producto,
                                descripcion: item.descripcion,
                                foto_producto: item.foto_producto,
                                producto_color: item.producto_color,
                                quantity: 1,
                            });
                            router.push("/carrito");
                        }}
                    />
                )}
            />

        </View>
    );
}