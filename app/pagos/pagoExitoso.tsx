import HeadersSimple from "@/components/headers/headersSimple";
import { router } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

export default function PagoExitoso() { 
    return (
        <>
            <HeadersSimple title="Pago Exitoso" />

            <View style={styles.container}>

                {/* CÍRCULO */}
                <View style={styles.circle}>

                    <MaterialIcons
                        name="check"
                        size={70}
                        color="black"
                    />

                </View>

                {/* TEXTO */}
                <Text style={styles.text}>
                    ¡Pago exitoso!
                </Text>

                {/* BOTÓN */}
                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={() => router.push("../(cliente)")}>
                    Volver al inicio
                </Button>

            </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    circle: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: "#0ea53e",

        justifyContent: "center",
        alignItems: "center",

        marginBottom: 25,
    },

    text: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#111",
        marginBottom: 120,
    },

    button: {
        width: "100%",
        backgroundColor: "#a855f7",
        borderRadius: 30,
        paddingVertical: 6,
    },

});