import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import HeaderBusqueda from "../../components/headers/headerBusqueda";
import ProductoCard from "../../components/productoCard";

import { Producto } from "../../models/producto";
import { obtenerProductos } from "../../services/productoService";

export default function Home() {

    const [productos, setProductos] = useState<Producto[]>([]);

    async function cargarProductos() {
        const data = await obtenerProductos();
        setProductos(data);
    }

    useEffect(() => {
        cargarProductos();
    }, []);

    return (
        <View style={{ flex: 1 }}>

            <HeaderBusqueda />

            <FlatList
                data={productos}
                keyExtractor={(item) => item.id_producto.toString()}
                renderItem={({ item }) => (
                    <ProductoCard producto={item} />
                )}
            />

        </View>
    );
}