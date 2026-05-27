import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs, useRouter } from "expo-router";

import {
    StyleSheet,
    View
} from "react-native";

export default function ClienteLayout() {
    //prueba
    const router = useRouter();
    return (
        <View style={{ flex: 1 }}>


            {/*  BOTON TEMPORAL 
            <TouchableOpacity
                style={styles.switchButton}
                onPress={() =>
                    router.replace("/productos")
                }>
                <Text style={styles.switchButtonText}>
                    Ver Admin
                </Text>
            </TouchableOpacity>*/}

            <Tabs

                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#4B0082",
                        height: 70,
                    },
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "#D3D3D3",
                    tabBarActiveBackgroundColor: "#4B0082",
                    tabBarInactiveBackgroundColor: "#5A109A",
                    tabBarLabelStyle: {
                        fontWeight: "700",
                        fontSize: 12,
                    },
                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Inicio",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" size={size} color={color} />
                        ),
                    }} />

                <Tabs.Screen
                    name="carrito"
                    options={{
                        title: "Carrito",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="cart-outline" size={size} color={color} />
                        ),
                    }} />

                <Tabs.Screen
                    name="ofertas"
                    options={{
                        title: "Ofertas",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="pricetag-outline" size={size} color={color} />
                        ),
                    }} />

                <Tabs.Screen
                    name="perfil"
                    options={{
                        title: "Yo",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person-outline" size={size} color={color} />
                        ),
                    }} />
                <Tabs.Screen
                    name="informacion-personal"
                    options={{
                        href: null,
                    }}
                />

               
            </Tabs>
        </View>//del boton temporal
    );
}

//ESTO es TEMPORAL
const styles = StyleSheet.create({

    switchButton: {
        position: "absolute",

        top: 50,
        right: 15,

        zIndex: 999,

        backgroundColor: "#FF6B6B",

        paddingHorizontal: 12,
        paddingVertical: 8,

        borderRadius: 20,
    },

    switchButtonText: {
        color: "white",
        fontWeight: "700",
    },

});