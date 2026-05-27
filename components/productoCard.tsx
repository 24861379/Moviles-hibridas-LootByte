import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Menu, Divider, IconButton } from "react-native-paper";
import { Producto } from "../models/producto";

interface Props{
    producto: Producto;
    badge?: string;
    onAddToCart?: () => void;
    onPress?: () => void;
}

export default function ProductoCard({ producto, badge, onAddToCart, onPress }: Props) { 
    const [visible, setVisible] = useState(false);
    const variante = producto.producto_color?.[0];

    return (
      <View style={styles.card}>
            {badge ? (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badge}</Text>
                </View>
            ) : null}
            <TouchableOpacity style={styles.content} activeOpacity={0.8} onPress={onPress}>
              <Image source={{ uri: producto.foto_producto }} style={styles.image} />
              <View style={styles.info}>

                <Text style={styles.text}>
                    {producto.nombre_producto}
                </Text>

                <Text style={styles.precio}>
                    ${ variante?.precio }
                </Text>

                <Text style={styles.stock}>
                    Cantidad disponible: {variante?.stock}
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.actions}>
                <IconButton
                    icon="cart"
                    onPress={() => {
                        if (onAddToCart) onAddToCart();
                    }}
                />
                <Menu visible={visible} onDismiss={() => setVisible(false)} anchor={
                    <IconButton
                        icon="dots-vertical"
                        onPress={() => setVisible(true)}/>}> 
                    <Menu.Item title="Editar"
                        onPress={() => {
                        setVisible(false);
                    }} />
                    <Divider />
                    <Menu.Item title="Eliminar"
                        titleStyle={{ color: "red" }}
                        onPress={() => {
                            setVisible(false);
                        }}  />
                </Menu>
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        position: "relative",
    },
    content: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    info: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    precio: {
        fontSize: 18,
        marginBottom: 5,
    },
    stock: {
        fontSize: 18,
    },
    actions: {
        justifyContent: "center",
        alignItems: "center",
    },
    badge: {
        position: "absolute",
        top: 8,
        left: 8,
        backgroundColor: "#FF3B30",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        zIndex: 9999,
        elevation: 6,
    },
    badgeText: {
        color: "white",
        fontWeight: "700",
        fontSize: 12,
    }
});