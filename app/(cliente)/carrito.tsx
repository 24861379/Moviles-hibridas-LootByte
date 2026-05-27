import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import HeaderSimple from "../../components/headers/headersSimple";
import { Button, IconButton } from "react-native-paper";
import { getCart, removeFromCart, updateQuantity, clearCart } from "../../services/cartService";

export default function Carrito() {
  const [cart, setCart] = useState([]);

  function load() {
    const data = getCart();
    setCart(data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <HeaderSimple title="Carrito" />
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id_producto}
        ListEmptyComponent={() => <Text style={{ padding: 16 }}>El carrito está vacío</Text>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.foto_producto }} style={styles.image} />
            <View style={styles.itemContent}>
              <Text style={styles.title}>{item.nombre_producto}</Text>
              <Text>{item.descripcion}</Text>
              <Text style={styles.price}>Precio: ${item.producto_color?.[0]?.precio}</Text>
              <Text>Cantidad: {item.quantity}</Text>
            </View>
            <View style={styles.actions}>
              <IconButton icon="minus" onPress={() => { updateQuantity(item.id_producto, item.quantity - 1); load(); }} />
              <IconButton icon="plus" onPress={() => { updateQuantity(item.id_producto, item.quantity + 1); load(); }} />
              <IconButton icon="delete" onPress={() => { removeFromCart(item.id_producto); load(); }} />
            </View>
          </View>
        )}
      />

      {cart.length > 0 && (
        <View style={styles.footer}>
          <Button mode="contained" onPress={() => { clearCart(); load(); }}>
            Vaciar carrito
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: "#f0f0f0",
  },
  itemContent: {
    flex: 1,
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
  price: {
    color: "#4B0082",
    fontWeight: "600",
    marginTop: 4,
  },
  footer: {
    padding: 12,
  }
});