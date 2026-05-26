import HeadersSimple from "@/components/headers/headersSimple";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";

export default function Pagos() { 
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [celular, setCelular] = useState("");

    const correoValido = /\S+@\S+\.\S+/.test(correo);

    function continuar() {
        if (nombre === "" || correo === "" || direccion === "" || ciudad === "" || celular === "") { 
            return;
        }
        router.push("/pagos/metodoPago");
    }
    return (
        <>
            <HeadersSimple title="Pagos" />

            <ScrollView style={styles.container}>
                <Text style={styles.titulo}>Datos de envío</Text>

                <TextInput
                    label="Nombre"
                    mode="outlined"
                    value={nombre}
                    onChangeText={setNombre}
                    style={styles.input}
                    error={nombre ===""}
                />
                <HelperText
                    type="error"
                    visible={nombre === ""}>
                    El nombre es obligatorio
                </HelperText>



                <TextInput
                    label="Correo"
                    mode="outlined"
                    value={correo}
                    onChangeText={setCorreo}
                    style={styles.input}
                    error={ correo !== "" && !correoValido }
                />
                <HelperText
                    type="error"
                    visible={ correo !== "" && !correoValido }>
                    El correo no es válido
                </HelperText>


                <TextInput
                    label="Dirección"
                    mode="outlined"
                    value={direccion}
                    onChangeText={setDireccion}
                    style={styles.input}
                />
                <TextInput
                    label="Ciudad"
                    mode="outlined"
                    value={ciudad}
                    onChangeText={setCiudad}
                    style={styles.input}
                    error={ciudad === ""}
                />
                <HelperText
                    type="error"
                    visible={ciudad === ""}>
                    La ciudad es obligatoria
                </HelperText>


                <TextInput
                    label="Celular"
                    mode="outlined"
                    value={celular}
                    onChangeText={setCelular}
                    style={styles.input}
                    error={celular === ""}
                    keyboardType="numeric"
                    maxLength={10}
                />
                <HelperText
                    type="error"
                    visible={celular === ""}>
                    El celular es obligatorio
                </HelperText>

                
                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={continuar}>
                    Escoger método de pago
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
    titulo: {
        marginTop: 15,
        marginBottom: 20,
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: "#111",
    },
    input: {
        marginTop: 12,
        marginBottom: 10,
        backgroundColor: "white",
    },
    button: {
        backgroundColor: "#a855f7",
        paddingVertical: 6,
        marginTop: 30,
        marginBottom: 40,
    },
});