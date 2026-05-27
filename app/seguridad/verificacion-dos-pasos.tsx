import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import HeaderSimplePerfilCliente from "../../components/headers/headersSimplePerfilCliente";
export default function VerificacionDosPasos() {
  const [activo, setActivo] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderSimplePerfilCliente title="Verificación dos pasos"
      backRoute="/seguridad" />

      <View style={styles.contenido}>
        <View style={styles.switchRow}>
          <Text>¿Desea activar la verificación de dos pasos?</Text>
          <Switch value={activo} onValueChange={setActivo} />
        </View>

        <Text style={styles.titulo}>Configura tu forma de validación</Text>

        <Text style={styles.opcion}>✉️ Correo</Text>
        <Text style={styles.detalle}>usuariodemo@email.com</Text>

        <Text style={styles.opcion}>📱 Teléfono</Text>
        <Text style={styles.detalle}>0000000000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contenido: {
    padding: 20,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },
  opcion: {
    fontWeight: "bold",
    marginTop: 15,
  },
  detalle: {
    color: "gray",
    marginTop: 5,
  },
});