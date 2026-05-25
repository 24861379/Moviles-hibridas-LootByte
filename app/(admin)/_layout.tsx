import { Tabs } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function AdminLayout() { 
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#4B0082",
                    height: 70,
                },
                tabBarHideOnKeyboard: true,
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
                name="productos"
                options={{
                    title: "Productos",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book-outline" size={size} color={color} />
                    ),
                }} />
            
            <Tabs.Screen
                name="usuarios"
                options={{
                    title: "Usuarios",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people-outline" size={size} color={color} />
                    ),
                }} />
            
            <Tabs.Screen
                name="pedidos"
                options={{
                    title: "Pedidos",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="bag-outline" size={size} color={color} />
                    ),
                }} />
            
            <Tabs.Screen
                name="perfilAdmin"
                options={{
                    title: "Yo",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }} />
            
            <Tabs.Screen
                name="producto/crearProducto"
                options={{
                    href: null,
                }}/>
        </Tabs>
    )
}
