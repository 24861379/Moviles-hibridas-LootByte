import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import HeaderSimplePerfilCliente from "../../components/headers/headersSimplePerfilCliente";
export default function CambioContrasena() {
  return (
    <View style={styles.container}>
      <HeaderSimplePerfilCliente title="Cambiar contraseña" 
      backRoute="/seguridad"/>
      

      <View style={styles.formulario}>
        <Text style={styles.label}>Contraseña actual *</Text>
        <TextInput style={styles.input} secureTextEntry />

        <Text style={styles.label}>Nueva contraseña *</Text>
        <TextInput style={styles.input} secureTextEntry />

        <Text style={styles.label}>Confirmar contraseña *</Text>
        <TextInput style={styles.input} secureTextEntry />

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textoBoton}>Cambiar contraseña</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formulario: {
    padding: 25,
  },
  label: {
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#d9d9d9",
    padding: 10,
    borderRadius: 8,
  },
  boton: {
    backgroundColor: "#A855F7",
    marginTop: 50,
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
  },
  textoBoton: {
    color: "white",
    fontWeight: "bold",
  },
});