import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HeaderSimpleProps = {
  title: string;
  backRoute?: string;
};

export default function HeaderSimplePerfilCliente({
  title,
  backRoute,
}: HeaderSimpleProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => {
            if (backRoute) {
              router.replace(backRoute as any);
            } else {
              router.back();
            }
          }}
        >
          <Ionicons name="arrow-back" size={32} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A855F7",
    height: 225,
    paddingTop: 50,
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});