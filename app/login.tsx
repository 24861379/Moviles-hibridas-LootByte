import { router } from "expo-router";
import { useState } from "react";

import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const iniciarSesion = () => {
    if (correo === "admin@gmail.com" && contrasena === "1234") {
      router.replace("/perfilAdmin");
    } else if (correo === "cliente@gmail.com" && contrasena === "1234") {
      router.replace("/");
    } else {
      Alert.alert("Error", "Correo o contraseña incorrectos");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titulo}>Regístrate / Inicia sesión</Text>

        <Image
          source={require("../assets/LootByte.png")}
          style={styles.logo}
/>
        

        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={correo}
          onChangeText={setCorreo}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={contrasena}
          onChangeText={setContrasena}
        />

        <TouchableOpacity style={styles.boton} onPress={iniciarSesion}>
          <Text style={styles.textoBoton}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.botonRegistro}
        onPress={() => router.push("/registro")}
      >
        <Text style={styles.textoRegistro}>Regístrate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonSocial}>
        <Text>Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonSocial}>
        <Text>Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  topContainer: {
    width: "100%",
    backgroundColor: "#A855F7",
    paddingTop: 80,
    paddingBottom: 40,
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  titulo: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    backgroundColor: "#d9d9d9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  boton: {
    backgroundColor: "#d8b4fe",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 10,
  },
  textoBoton: {
    color: "black",
    fontWeight: "bold",
  },
  botonRegistro: {
    marginTop: 30,
    backgroundColor: "#d8b4fe",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  textoRegistro: {
    fontWeight: "bold",
  },
  botonSocial: {
    marginTop: 15,
    width: "70%",
    backgroundColor: "#d9d9d9",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
});