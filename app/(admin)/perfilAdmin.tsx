import HeaderSimplePerfilCliente from "@/components/headers/headersSimplePerfilCliente";
import { View, Text } from "react-native";

export default function perfilAdmin() {
  return (
    <View>
      <HeaderSimplePerfilCliente title="Perfil" />
      <Text>Perfil Admin</Text>
    </View>
  );
}