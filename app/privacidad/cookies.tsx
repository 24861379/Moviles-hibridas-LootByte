import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import HeaderSimplePerfilCliente from "../../components/headers/headersSimplePerfilCliente";

export default function Cookies() {
  const [funcionales, setFuncionales] = useState(false);
  const [analiticas, setAnaliticas] = useState(false);
  const [marketing, setMarketing] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderSimplePerfilCliente title="Configurar cookies" />

      <View style={styles.contenido}>
        <Text style={styles.texto}>
          Utilizamos cookies para mejorar tu experiencia.
        </Text>

        <View style={styles.fila}>
          <Text>Cookies necesarias</Text>
          <Switch value={true} disabled />
        </View>

        <View style={styles.fila}>
          <Text>Cookies funcionales</Text>
          <Switch value={funcionales} onValueChange={setFuncionales} />
        </View>

        <View style={styles.fila}>
          <Text>Cookies analíticas</Text>
          <Switch value={analiticas} onValueChange={setAnaliticas} />
        </View>

        <View style={styles.fila}>
          <Text>Cookies de marketing</Text>
          <Switch value={marketing} onValueChange={setMarketing} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  contenido: { padding: 20 },
  texto: { marginBottom: 30 },
  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});