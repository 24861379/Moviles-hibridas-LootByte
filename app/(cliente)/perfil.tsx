import { View, Text } from "react-native";
import HeaderSimplePerfilCliente from "../../components/headers/headersSimplePerfilCliente";

export default function Perfil() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderSimplePerfilCliente title="Perfil" />
      <Text>Perfil</Text>
    </View>
  );
}