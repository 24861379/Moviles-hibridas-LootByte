import HeaderSimplePerfilCliente from "@/components/headers/headersSimplePerfilCliente";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function perfilAdmin() {
  return (
    <View style={styles.container}>
      <HeaderSimplePerfilCliente title="Perfil" />

      <View style={styles.perfilBox}>
        <Text style={styles.icono}>👤</Text>
        <Text style={styles.nombre}>Administrador</Text>
        <Text style={styles.correo}>admin@gmail.com</Text>
      </View>

      <TouchableOpacity
        style={styles.opcion}
        onPress={() => router.push("/productos")}
      >
        <Text>📦 Productos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.opcion}
        onPress={() => router.push("/pedidos")}
      >
        <Text>🛒 Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.opcion}
        onPress={() => router.push("/usuarios")}
      >
        <Text>👥 Usuarios</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cerrarSesion}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.textoCerrar}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  perfilBox: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 30,
  },
  icono: {
    fontSize: 50,
  },
  nombre: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  correo: {
    color: "gray",
    marginTop: 5,
  },
  opcion: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cerrarSesion: {
    margin: 20,
    backgroundColor: "#A855F7",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  textoCerrar: {
    color: "white",
    fontWeight: "bold",
  },
});