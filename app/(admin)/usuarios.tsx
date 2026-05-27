import { View, Text, FlatList, StyleSheet } from "react-native";
import HeaderBusquedaAdminUsuario from "../../components/headers/headerBusquedaAdminUsuario";
import {  useRouter } from "expo-router";

import UsuarioCard from "@/components/usuarioCard";
import { FAB } from "react-native-paper";

export default function Usuarios() {
  const usuarios = [
    {
      id_usuario: "1",
      nombre_completo: "Usuario Demo",
      rol: "Operador",
      foto: require("../../assets/images/demo_usuario.png"),
    },
    {
      id_usuario: "2",
      nombre_completo: "Usuario Demo",
      rol: "Operador",
      foto: require("../../assets/images/usuario_demo.png"),
    },
  ];

  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <HeaderBusquedaAdminUsuario />

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id_usuario.toString()}
        renderItem={({ item }) => (
          <UsuarioCard
            usuario={item}/>
        )}
        contentContainerStyle={{ paddingVertical: 8 }}
        scrollEnabled={true}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        color="white"
        onPress={() => router.push({ pathname: "/usuario/crearUsuario" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
   fab: {
    position: "absolute",
    backgroundColor: "#a855f7",
    right: 16,
    bottom: 24,
  }
});