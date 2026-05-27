import HeadersSimple from "@/components/headers/headersSimple";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function pedidos() {
  const listaPedidos = [
    { id: 1, usuario: "Carlos", estado: "Pendiente" },
    { id: 2, usuario: "María", estado: "En camino" },
    { id: 3, usuario: "Juan", estado: "Entregado" },
    { id: 4, usuario: "Ana", estado: "Pendiente" },
  ];

  return (
    <View style={styles.container}>
      <HeadersSimple title="Pedidos" />

      <ScrollView style={styles.lista}>
        {listaPedidos.map((pedido) => (
          <View key={pedido.id} style={styles.tarjeta}>
            <Text style={styles.usuario}>Usuario: {pedido.usuario}</Text>
            <Text style={styles.estado}>Estado: {pedido.estado}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  lista: {
    padding: 15,
  },
  tarjeta: {
    backgroundColor: "#E9D5FF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  usuario: {
    fontSize: 16,
    fontWeight: "bold",
  },
  estado: {
    marginTop: 8,
    fontSize: 14,
  },
});