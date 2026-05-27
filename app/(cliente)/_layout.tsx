import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  switchButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 10,
    backgroundColor: "#4B0082",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 24,
  },
  switchButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default function ClienteLayout() {
  const router = useRouter();

  return (
    <>
      {/* BOTÓN TEMPORAL */}
      <TouchableOpacity
        style={styles.switchButton}
        onPress={() => router.replace("/(admin)")}
      >
        <Text style={styles.switchButtonText}>Ver Admin</Text>
      </TouchableOpacity>

      {/* TABS */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#4B0082",
            height: 70,
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#D3D3D3",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="carrito"
          options={{
            title: "Carrito",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="ofertas"
          options={{
            title: "Ofertas",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="pricetag-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="perfil"
          options={{
            title: "Yo",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}