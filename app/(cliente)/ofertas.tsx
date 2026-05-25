import { View, Text } from "react-native";
import HeaderBusqueda from "../../components/headers/headerBusqueda";


export default function Ofertas() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBusqueda />
      <Text>Ofertas</Text>
    </View>
  );
}