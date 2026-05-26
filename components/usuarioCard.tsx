import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IconButton, Menu } from "react-native-paper";


interface Props{
    usuario: {
        id_usuario: string;
        nombre_completo: string;
        rol: string;
        foto: any;
    };
}

export default function UsuarioCard({ usuario }: Props) {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.card}>

            <Image source={usuario.foto} style={styles.image} />

            <View style={styles.userInfo}>
                <Text style={styles.nombre}>
                    {usuario.nombre_completo}
                </Text>

                <Text style={styles.rol}>
                    {usuario.rol}
                </Text>
            </View>

            <Menu
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={
                    <IconButton
                        icon="dots-vertical"
                        size={20}
                        onPress={() => setVisible(true)}
                    />
                }
            >
                <Menu.Item onPress={() => { }} title="Editar" />
                <Menu.Item onPress={() => { }} title="Eliminar" />
            </Menu>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 12,
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    userInfo: {
        flex: 1,
        justifyContent: "center",
    },
    nombre: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 4,
        color: "#1a1a1a",
    },
    rol: {
        fontSize: 14,
        color: "#666666",
        fontWeight: "500",
    },
    imagePlaceholder: {
        backgroundColor: "#e8e8e8",
    },
    menuButton: {
        margin: 0,
    }
});