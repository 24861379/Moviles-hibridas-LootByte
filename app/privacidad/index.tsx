import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderSimplePerfilCliente from "../../components/headers/headersSimplePerfilCliente";

export default function Privacidad() {
    return (
        <View style={styles.container}>
            <HeaderSimplePerfilCliente title="Privacidad" />

            <TouchableOpacity
                style={styles.opcion}
                onPress={() => router.push("/privacidad/cookies")}
            >
                <Text>⚙️ Configurar cookies</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.opcion}
                onPress={() => router.push("/privacidad/cancelar-cuenta")}
            >
                <Text>👤 Cancelar cuenta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    opcion: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
});