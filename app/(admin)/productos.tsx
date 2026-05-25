import { View, Text, FlatList, StyleSheet } from "react-native";
import HeaderBusquedaAdmin from "../../components/headers/headerBusquedaAdmin";
import React, { useEffect, useState } from "react";
import ProductoCard from "../../components/productoCard";
import { obtenerProductos } from "../../services/productoService";
import { Producto } from "../../models/producto";
import { FAB } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Productos() {
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
    <View style={{ flex: 1 }}>
      <HeaderBusquedaAdmin />
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id_producto.toString()}
        renderItem={({ item }) => (
          <ProductoCard producto={item} />
        )} />
      <FAB
        icon="plus"
        style={styles.fab}
        color="white"
        onPress={() => router.push("/producto/crearProducto")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
   fab: {
    position: "absolute",
    backgroundColor:"#A855F7",
    right: 20,
    bottom: 20,
  }
});