import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.perfilBox}>
        <Text style={styles.icono}>👤</Text>
        <Text style={styles.nombre}>Usuario Demo</Text>
        <Text style={styles.correo}>usuariodemo@email.com</Text>
      </View>

      <TouchableOpacity
        style={styles.opcion}
        onPress={() => router.push("/informacion-personal")}
      >
        <Text>Información personal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.opcion}
        onPress={() => router.push("/seguridad")}
      >
        <Text>Seguridad</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.opcion}
        onPress={() => router.push("/privacidad")}
      >
        <Text>Privacidad</Text>
      </TouchableOpacity>

      <TouchableOpacity
  style={styles.logoutButton}
  onPress={() => router.push("/perfil")}
>
  <Text style={styles.logoutText}>Cerrar sesión</Text>
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
    backgroundColor: "#A855F7",
    alignItems: "center",
    padding: 30,
  },

  icono: {
    fontSize: 50,
  },

  nombre: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },

  correo: {
    color: "white",
    marginTop: 5,
  },

  opcion: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  logoutButton: {
    margin: 20,
    backgroundColor: "#A855F7",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  logoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});