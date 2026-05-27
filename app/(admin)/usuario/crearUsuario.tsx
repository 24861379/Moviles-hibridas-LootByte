import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import HeadersSimple from "@/components/headers/headersSimple";

export default function CrearUsuario() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [celular, setCelular] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [rol, setRol] = useState("Operador");

    return (
        <>
            <HeadersSimple title="Crear Usuario" />
            <ScrollView style={styles.container}>
                <View style={styles.photoContainer}>
                    <Image
                        source={require("../../../assets/images/usuario_demo.png")}
                        style={styles.image} />

                    <TouchableOpacity style={styles.uploadButton}>
                        <Text style={styles.uploadText}>
                            Subir Foto
                        </Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    label="Nombre"
                    value={nombre}
                    onChangeText={setNombre}
                    mode="outlined"
                    style={styles.input} />

                <TextInput
                    label="Correo"
                    value={correo}
                    onChangeText={setCorreo}
                    mode="outlined"
                    keyboardType="email-address"
                    style={styles.input} />

                <TextInput
                    label="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    mode="outlined"
                    style={styles.input} />

                <TextInput
                    label="Celular"
                    value={celular}
                    onChangeText={setCelular}
                    keyboardType="phone-pad"
                    mode="outlined"
                    style={styles.input} />

                <TextInput
                    label="Dirección"
                    value={direccion}
                    onChangeText={setDireccion}
                    mode="outlined"
                    style={styles.input} />

                <TextInput
                    label="Ciudad"
                    value={ciudad}
                    onChangeText={setCiudad}
                    mode="outlined"
                    style={styles.input} />

                <Text style={styles.label}>
                    Rol
                </Text>

                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={rol}
                        onValueChange={(itemValue) => setRol(itemValue)}>
                        <Picker.Item label="Administrador" value="Administrador" />
                        <Picker.Item label="Operador" value="Operador" />
                    </Picker>
                </View>

                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={() => { }}>
                    Crear Usuario
                </Button>

            </ScrollView>
    </>
        
    );
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

    photoContainer: {
        alignItems: "center",
        marginBottom: 24,
    },

    image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        marginBottom: 12,
    },

    uploadButton: {
        backgroundColor: "#a855f7",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },

    uploadText: {
        color: "white",
        fontWeight: "600",
    },

    input: {
        marginBottom: 14,
        backgroundColor: "white",
    },

    label: {
        marginBottom: 8,
        fontWeight: "600",
        color: "#333",
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
        marginBottom: 40,
    },
});