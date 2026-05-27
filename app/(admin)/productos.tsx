import { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import HeaderBusquedaAdmin from "../../components/headers/headerBusquedaAdmin";
import ProductoCard from "../../components/productoCard";
import { obtenerProductos } from "../../services/productoService";

import { useFocusEffect, useRouter } from "expo-router";
import { FAB } from "react-native-paper";
import { Producto } from "../../models/producto";

export default function Productos() {
  const router = useRouter();
  const [productos, setProductos] = useState<Producto[]>([]);

      useFocusEffect(
          useCallback(() => {
              cargarProductos();
          }, [])
      );

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
          <ProductoCard
            producto={item}
            onDelete={(id) => setProductos((prev) => prev.filter((producto) => producto.id_producto !== id))}
          />
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
