import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import HeaderSimplePerfilCliente from "../../components/headers/headersSimplePerfilCliente";

export default function InformacionPersonal() {
  return (
    <View style={styles.container}>
      <HeaderSimplePerfilCliente title="Información personal"
       backRoute="/perfil-cliente"
 />

      <View style={styles.formulario}>
        <Text style={styles.editar}>✎</Text>

        <Text style={styles.label}>Nombre</Text>
        <TextInput style={styles.input} value="Usuario Demo" editable={false} />

        <Text style={styles.label}>Correo</Text>
        <TextInput style={styles.input} value="usuariodemo@email.com" editable={false} />

        <Text style={styles.label}>Dirección</Text>
        <TextInput style={styles.input} value="Calle 123 #45-67" editable={false} />

        <Text style={styles.label}>Ciudad</Text>
        <TextInput style={styles.input} value="Ciudad Ejemplo" editable={false} />

        <Text style={styles.label}>Celular</Text>
        <TextInput style={styles.input} value="0000000000" editable={false} />

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textoBoton}>Guardar cambios</Text>
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
  editar: {
    fontSize: 28,
    textAlign: "right",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#d9d9d9",
    padding: 10,
    borderRadius: 8,
  },
  boton: {
    backgroundColor: "#A855F7",
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 30,
  },
  textoBoton: {
    color: "white",
    fontWeight: "bold",
  },
});