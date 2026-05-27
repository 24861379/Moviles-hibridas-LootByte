import { TextInput, HelperText, Button } from "react-native-paper";
import HeadersSimple from "@/components/headers/headersSimple";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";

export default function MetodoPago() { 
    const [PSE, setPSE] = useState("Seleccione un banco");
    
    return (
        <>
            <HeadersSimple title="Método de pago" />
        
            <View style={styles.container}>
                <Text style={styles.titulo}>Método de pago</Text>
                <Text> Seleccione el método de pago</Text>

                <Button
                    mode="contained"
                    style={styles.button}
                    textColor="#111"
                    onPress={() => router.push("/pagos/tarjeta")}>
                    Pago con tarjeta
                </Button>

                <Text>
                    Pago con PSE
                </Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={PSE}
                    onValueChange={itemValue => setPSE(itemValue)}>
                        <Picker.Item label="Seleccione un banco" value="Seleccione un banco" /> 
                        <Picker.Item label="Bancolombia" value="Bancolombia" />
                        <Picker.Item label="Davivienda" value="Davivienda" />
                        <Picker.Item label="Daviplata" value="Daviplata" />
                        <Picker.Item label="BBVA" value="BBVA" />
                        <Picker.Item label="Banco de Bogotá" value="Banco de Bogotá" />
                        <Picker.Item label="Banco Popular" value="Banco Popular" />
                        <Picker.Item label="Banco Caja Social" value="Banco Caja Social" />
                        <Picker.Item label="Scotiabanck Colpatria" value="Scotiabanck Colpatria" />
                        <Picker.Item label="Banco Av Villas" value="Banco Av Villas" />
                        <Picker.Item label="Nequi" value="Nequi" />

                    </Picker>
                </View>
                {
                    PSE !== "Seleccione un banco" && (
                        <Text style={styles.redireccionTexto}>
                            Redirigiendo a PSE... (esto es solo una simulación, no se redirige a ningún lado)
                        </Text>
                    )
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        padding: 16,
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
        backgroundColor: "#D9D9D9",
        width: 317,
        height: 59,
        borderRadius: 8,
        marginBottom: 24,
        overflow: "hidden",
    },
    button: {
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        justifyContent: "center",
        width: 317,
        height: 59,
        paddingVertical: 6,
        marginTop: 30,
        marginBottom: 40,
        borderRadius: 8,
    },
    redireccionTexto: {
        marginTop: 5,
        fontSize: 13,
        color: "#6b21a8",
        fontWeight: "600",
    },
});