import HeadersSimple from "@/components/headers/headersSimple";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function Tarjeta() {
    const [numeroTarjeta, setNumeroTarjeta] = useState("");
    const [nombreTarjeta, setNombreTarjeta] = useState("");
    const [fechaExpiracion, setFechaExpiracion] = useState("");
    const [cvv, setCvv] = useState("");
    const [cuotas, setCuotas] = useState("1");

    function continuar() {
        if (numeroTarjeta === "" || nombreTarjeta === "" || fechaExpiracion === "" || cvv === "" || cuotas === "") {
            return;
        }
        router.push("/pagos/pagoExitoso");
    }

    return (
        <>
            <HeadersSimple title="Vista de tarjeta" />

            <ScrollView style={styles.container}>
                <Text style={styles.titulo}>Método de pago</Text>

                <TextInput
                    label="Número de tarjeta"
                    mode="outlined"
                    value={numeroTarjeta}
                    onChangeText={setNumeroTarjeta}
                    style={styles.input}
                    error={numeroTarjeta === ""}
                    keyboardType="numeric"
                    maxLength={12}
                />

                <TextInput
                    label="Nombre en la tarjeta"
                    mode="outlined"
                    value={nombreTarjeta}
                    onChangeText={setNombreTarjeta}
                    style={styles.input}
                    error={nombreTarjeta === ""}
                />

                <TextInput
                    label="Fecha de expiración (MM/AA)"
                    mode="outlined"
                    value={fechaExpiracion}
                    onChangeText={setFechaExpiracion}
                    style={styles.MMAA}
                    error={fechaExpiracion === ""}
                    keyboardType="numeric"
                    maxLength={5}
                />

                <TextInput
                    label="CVV"
                    mode="outlined"
                    value={cvv}
                    onChangeText={setCvv}
                    style={styles.CVV}
                    error={cvv === ""}
                    keyboardType="numeric"
                    maxLength={3}
                />

                <Text style={styles.label}>Número de cuotas: </Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={cuotas}
                        onValueChange={setCuotas}>
                        <Picker.Item label="1" value={1} />
                        <Picker.Item label="2" value={2} />
                        <Picker.Item label="3" value={3} />
                        <Picker.Item label="4" value={4} />
                        <Picker.Item label="5" value={5} />
                        <Picker.Item label="6" value={6} />
                        <Picker.Item label="7" value={7} />
                        <Picker.Item label="8" value={8} />
                        <Picker.Item label="9" value={9} />
                        <Picker.Item label="10" value={10} />
                        <Picker.Item label="11" value={11} />
                        <Picker.Item label="12" value={12} />
                    </Picker>
                </View>

                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={continuar}>
                    Continuar
                </Button>
            
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 20,
        color: "#111",
    },
    input: {
        marginBottom: 14,
        backgroundColor: "white",
    },
    MMAA: {
        width: 252,
        marginBottom: 14,
        backgroundColor: "white",
    },
    CVV: {
        width: 98,
        marginBottom: 14,
        backgroundColor: "white",
    },
    label: {
        marginBottom: 8,
        fontWeight: "600",
        color: "#333",
    },
    titulo: {
        marginTop: 15,
        marginBottom: 20,
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: "#111",
    },
    pickerContainer: {
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 24,
        overflow: "hidden",
    },
    button: {
        backgroundColor: "#a855f7",
        paddingVertical: 6,
        marginTop: 30,
        marginBottom: 40,
    },
});