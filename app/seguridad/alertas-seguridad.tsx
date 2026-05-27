import { StyleSheet, Text, View } from "react-native";
import HeaderSimplePerfilCliente from "../../components/headers/headersSimplePerfilCliente";
export default function AlertasSeguridad() {
  return (
    <View style={styles.container}>
      <HeaderSimplePerfilCliente title="Alertas de seguridad"
      backRoute="/seguridad" />

      <View style={styles.contenido}>
        <Text style={styles.titulo}>Avisos de alertas</Text>

        <Text style={styles.texto}>
          En este apartado y en los canales registrados podrá recibir alertas
          de inicio de sesión entre otros.
        </Text>

        <Text style={styles.opcion}>✉️ Correo</Text>
        <Text style={styles.detalle}>usuariodemo@email.com</Text>

        <Text style={styles.opcion}>📱 Número celular</Text>
        <Text style={styles.detalle}>0000000000</Text>

        <Text style={styles.tituloAlertas}>Alertas recientes</Text>

        <Text style={styles.icono}>📭</Text>
        <Text style={styles.sinAlertas}>No hay alertas recientes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  contenido: { padding: 20 },
  titulo: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  texto: { color: "gray", marginBottom: 25 },
  opcion: { fontWeight: "bold", marginTop: 15 },
  detalle: { color: "gray", marginTop: 5 },
  tituloAlertas: { fontSize: 18, fontWeight: "bold", marginTop: 35 },
  icono: { fontSize: 70, textAlign: "center", marginTop: 50 },
  sinAlertas: { textAlign: "center", color: "gray", marginTop: 10 },
});