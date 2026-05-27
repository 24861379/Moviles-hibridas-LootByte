import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Registro() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.flecha}>←</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>Registra tu cuenta</Text>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput style={styles.input} placeholder="Nombre completo" />

        <Text style={styles.label}>Dirección</Text>
        <TextInput style={styles.input} placeholder="Calle 123 #45-67" />

        <Text style={styles.label}>Ciudad</Text>
        <TextInput style={styles.input} placeholder="Ingrese la ciudad" />

        <Text style={styles.label}>Celular</Text>
        <TextInput style={styles.input} placeholder="Ingrese su número de celular" />

        <Text style={styles.label}>Correo</Text>
        <TextInput style={styles.input} placeholder="Correo" />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />

        <TouchableOpacity
          style={styles.boton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.textoBoton}>Registrarse</Text>
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
  header: {
    backgroundColor: "#A855F7",
    paddingTop: 45,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  flecha: {
    fontSize: 28,
    color: "black",
    marginRight: 15,
  },
  titulo: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  formulario: {
    padding: 25,
    marginTop: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#d9d9d9",
    padding: 10,
    borderRadius: 8,
  },
  boton: {
    backgroundColor: "#A855F7",
    marginTop: 30,
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
  },
  textoBoton: {
    color: "white",
    fontWeight: "bold",
  },
});