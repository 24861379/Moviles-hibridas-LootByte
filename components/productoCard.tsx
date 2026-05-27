import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider, IconButton, Menu } from "react-native-paper";
import { Producto } from "../models/producto";
import { eliminarProducto } from "../services/productoService";

interface Props{
    producto: Producto;
    onDelete?: (id_producto: string) => void;
    onPress?: () => void;
    onAddToCart?: () => void;
}

export default function ProductoCard({ producto, onDelete, onPress, onAddToCart }: Props) { 
    const [visible, setVisible] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();
    const variante = producto.producto_color?.[0];

    async function handleDelete() {
        setVisible(false);

        Alert.alert(
            "Eliminar producto",
            `¿Estás seguro de que deseas eliminar "${producto.nombre_producto}"?`,
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: async () => {
                        setIsDeleting(true);
                        const result = await eliminarProducto(producto.id_producto);
                        setIsDeleting(false);

                        if (result.success) {
                            onDelete?.(producto.id_producto);
                            Alert.alert("Eliminado", "El producto se eliminó correctamente.");
                        } else {
                            Alert.alert("Error", result.error || "No se pudo eliminar el producto.");
                        }
                    }
                }
            ]
        );
    }

        return (
            <View style={styles.card}>
                <TouchableOpacity
                    style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
                    onPress={onPress}
                    activeOpacity={0.8}
                >
                    {producto.foto_producto ? (
                        <Image source={{ uri: producto.foto_producto }} style={styles.image} />
                    ) : (
                        <View style={[styles.image, styles.imagePlaceholder]} />
                    )}

                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <Text style={styles.text}>{producto.nombre_producto}</Text>

                        <Text style={styles.precio}>${variante?.precio}</Text>

                        <Text style={styles.stock}>Cantidad disponible: {variante?.stock}</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.actions}>
                    <IconButton
                        icon="cart"
                        onPress={() => onAddToCart?.()}
                    />

                    <Menu
                        visible={visible}
                        onDismiss={() => setVisible(false)}
                        anchor={
                            <IconButton
                                icon="dots-vertical"
                                onPress={() => setVisible(true)}
                            />
                        }
                    >
                        <Menu.Item
                            title="Editar"
                            onPress={() => {
                                setVisible(false);
                                router.push(`/producto/editarProducto?id=${producto.id_producto}`);
                            }}
                        />
                        <Divider />
                        <Menu.Item
                            title="Eliminar"
                            titleStyle={{ color: "red" }}
                            onPress={() => {
                                handleDelete();
                            }}
                        />
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
    imagePlaceholder: {
        backgroundColor: "#f0f0f0"
    }
    ,
    actions: {
        justifyContent: "center",
        alignItems: "center",
    }
});