import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderSimplePerfilCliente from "../../components/headers/headersSimplePerfilCliente";
export default function Seguridad() {
  return (
    <View style={styles.container}>
      <HeaderSimplePerfilCliente title="Seguridad" />

      <TouchableOpacity
        style={styles.opcion}
        onPress={() => router.push("/seguridad/cambio-contrasena")}
      >
        <Text>🔄 Cambiar contraseña</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.opcion}
        onPress={() => router.push("/seguridad/verificacion-dos-pasos")}
      >
        <Text>🔳 Verificación de dos pasos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.opcion}
        onPress={() => router.push("/seguridad/alertas-seguridad")}
      >
        <Text>📄 Alertas de seguridad</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  opcion: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});