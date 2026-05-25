import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="¿Qué estás buscando?"
        placeholderTextColor="#CFCBCB"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4C1D95",
    borderRadius: 30,
    paddingHorizontal: 10,
    flex: 1,
    height: 45,
  },

  input: {
    flex: 1,
    marginLeft: 10,
  },
});