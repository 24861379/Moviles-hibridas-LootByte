import { View, Text } from "react-native";
import HeaderSimple from "../../components/headers/headersSimple";

export default function Carrito() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderSimple title="Carrito" />
      <Text>Carrito</Text>
    </View>
  );
}