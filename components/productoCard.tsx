import { useState } from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import { Menu, Divider, IconButton } from "react-native-paper";
import { Producto } from "../models/producto";

interface Props{
    producto: Producto;
}

export default function ProductoCard({ producto }: Props) { 
    const [visible, setVisible] = useState(false);
    const variante = producto.producto_color?.[0];

    return (
      <View style={styles.card}>
            <Image source={{ uri: producto.foto_producto }} style={styles.image} />
            <View style={{ flex: 1, marginLeft: 20 }}>

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
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
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
    stock:{
        fontSize: 18,

    }
});