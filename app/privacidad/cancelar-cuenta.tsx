import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderSimplePerfilCliente from "../../components/headers/headersSimplePerfilCliente";

export default function CancelarCuenta() {
  const cancelarCuenta = () => {
    Alert.alert("Cuenta cancelada");
  };

  return (
    <View style={styles.container}>
      <HeaderSimplePerfilCliente title="Cancelar cuenta" />

      <View style={styles.contenido}>
        <Text style={styles.texto}>
          Una vez que canceles tu cuenta, no hay vuelta atrás.
        </Text>

        <TouchableOpacity style={styles.boton} onPress={cancelarCuenta}>
          <Text style={styles.textoBoton}>Cancelar cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  contenido: { padding: 20 },
  texto: { marginBottom: 30 },
  boton: {
    borderWidth: 1,
    borderColor: "red",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBoton: {
    color: "red",
    fontWeight: "bold",
  },
});