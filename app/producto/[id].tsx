import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-paper";
import { useRouter, useLocalSearchParams } from "expo-router";
import { addToCart } from "../../services/cartService";
import HeadersSimple from "../../components/headers/headersSimple";
import { obtenerProducto } from "../../services/productoService";
import { Producto } from "../../models/producto";

export default function DetalleProducto() {
  const { id, oferta, discount } = useLocalSearchParams();
  const router = useRouter();
  const [producto, setProducto] = useState<Producto | null>(null);

  const isOferta = oferta === "true";
  const descuento = Number(discount) || 0;

  useEffect(() => {
    if (!id) return;
    (async () => {
      const data = await obtenerProducto(id);
      setProducto(data);
    })();
  }, [id]);

  if (!producto) return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Cargando producto...</Text>
    </View>
  );

  const variante = producto.producto_color?.[0];
  const precioNormal = Number(variante?.precio) || 0;
  const precioDescuento = isOferta ? Math.round(precioNormal * (1 - descuento / 100)) : precioNormal;

  return (
    <>
      <HeadersSimple title={producto.nombre_producto || "Producto"} />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: producto.foto_producto }} style={styles.image} />
        <Text style={styles.nombre}>{producto.nombre_producto}</Text>
        {isOferta ? (
          <View style={styles.priceRow}>
            <Text style={styles.precioNormal}>${precioNormal}</Text>
            <Text style={styles.precioDescuento}>${precioDescuento}</Text>
          </View>
        ) : (
          <Text style={styles.precio}>${precioNormal}</Text>
        )}
        {isOferta && <Text style={styles.discountText}>{descuento}% de descuento</Text>}
        <Text style={styles.stock}>Stock: {variante?.stock}</Text>
        <Text style={styles.label}>Descripción</Text>
        <Text style={styles.descripcion}>{producto.descripcion || "No hay descripción disponible."}</Text>
        <Button mode="contained" style={styles.addButton} onPress={() => {
          addToCart({
            id_producto: producto.id_producto,
            nombre_producto: producto.nombre_producto,
            descripcion: producto.descripcion,
            foto_producto: producto.foto_producto,
            producto_color: producto.producto_color,
            quantity: 1,
          });
          router.push("/carrito");
          Alert.alert("Carrito", "Producto agregado al carrito");
        }}>
          Agregar al carrito
        </Button>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  nombre: {
    fontSize: 22,
    fontWeight: "700",
  },
  precio: {
    fontSize: 20,
    color: "#4B0082",
    fontWeight: "600",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 8,
  },
  precioNormal: {
    fontSize: 18,
    color: "#999",
    textDecorationLine: "line-through",
  },
  precioDescuento: {
    fontSize: 22,
    color: "#E63946",
    fontWeight: "700",
  },
  discountText: {
    marginTop: 6,
    color: "#E63946",
    fontWeight: "700",
  },
  stock: {
    fontSize: 16,
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 6,
  },
  descripcion: {
    fontSize: 16,
    marginTop: 8,
    lineHeight: 22,
  },
  addButton: {
    marginTop: 12,
    backgroundColor: "#A855F7",
  }
});
