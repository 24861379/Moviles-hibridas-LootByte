import { View, Platform, StyleSheet, Image, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import HeadersSimple from "../../../components/headers/headersSimple";
import { TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { cargarCategorias } from "../../../services/categoriaServices";
import { cargarColores } from "../../../services/colorService";
import { crearProducto } from "../../../services/productoService";
import { Categoria } from "../../../models/categoria";
import { Color } from "../../../models/color";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

export default function CrearProducto() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [colores, setColores] = useState<Color[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function cargarDatos() {
            const categoriasData = await cargarCategorias();
            const coloresData = await cargarColores();
            setCategorias(categoriasData);
            setColores(coloresData);
        }
        cargarDatos();
    }, []);

    const { control, handleSubmit } = useForm();
    async function guardarProducto(data: any) {
        if (!image) {
            Alert.alert("Error", "Por favor selecciona una imagen");
            return;
        }

        setLoading(true);
        const resultado = await crearProducto(data, image);
        setLoading(false);

        if (resultado.success) {
            Alert.alert("Éxito", "Producto creado correctamente");
            router.back();
        } else {
            const mensajeError = resultado && resultado.error
                ? (typeof resultado.error === 'string' ? resultado.error : String(resultado.error))
                : "No se pudo crear el producto";
            Alert.alert("Error", mensajeError);
        }
    }

    const [image, setImage] = useState<string | null>(null);
    async function seleccionarImagen() {
        const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permiso.granted) {
            alert("Se necesitan permisos para acceder a la galería");
            return;
        }
        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
        });
        if (!resultado.canceled) {
            setImage(resultado.assets[0].uri);
        }
    }

    async function tomarFoto() {
        const permiso = await ImagePicker.requestCameraPermissionsAsync();
        if (!permiso.granted) {
            alert("Se necesitan permisos");
            return;
        }
        const resultado = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (!resultado.canceled) {
            setImage(resultado.assets[0].uri);
        }
    }

    return (
        <>
            <HeadersSimple title="Crear producto" />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

                    {/* <View style={styles.container}> */}

                        <Button mode="outlined" onPress={seleccionarImagen}>
                            Seleccionar imagen
                        </Button>

                        <Button mode="outlined" onPress={tomarFoto}>
                            Tomar foto
                        </Button>
                        {image && (
                            <Image
                                source={{ uri: image }}
                                style={{
                                    width: "100%",
                                    height: 200,
                                    borderRadius: 10
                                }} />
                        )}

                        <Controller control={control} name="nombre_producto" defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <TextInput label="Nombre del producto" value={value} onChangeText={onChange} mode="outlined" style={styles.input} />
                            )} />

                        <Controller control={control} name="codigo_producto" defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <TextInput label="Código del producto" value={value} onChangeText={onChange} mode="outlined" style={styles.input} />
                            )} />

                        <Controller control={control} name="precio_producto" defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <TextInput label="Precio del producto" value={value} onChangeText={onChange} mode="outlined" style={styles.input} />
                            )} />

                        <Controller control={control} name="stock_producto" defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <TextInput label="Stock del producto" value={value} onChangeText={onChange} mode="outlined" style={styles.input} />
                            )} />

                        {/* spinner */}
                        <Controller control={control} name="colores_producto" defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <View style={styles.pickerContainer}>
                                    <Picker selectedValue={value} onValueChange={(itemValue) => onChange(itemValue)}>
                                        <Picker.Item label="Seleccione color" value="" />
                                        {colores.map((color: any) => (
                                            <Picker.Item
                                                key={color.id_color}
                                                label={color.nombre_color}
                                                value={color.id_color} />
                                        ))}
                                    </Picker>
                                </View>
                            )} />

                        {/* spinner */}
                        <Controller control={control} name="categoria_producto" defaultValue="" render={({ field: { onChange, value } }) => (
                            <View style={styles.pickerContainer}>
                                <Picker selectedValue={value} onValueChange={(itemValue) => onChange(itemValue)}>
                                    <Picker.Item label="Seleccione categoría" value="" />
                                    {categorias.map((categoria: any) => (
                                        <Picker.Item
                                            key={categoria.id_categoria}
                                            label={categoria.categoria_producto}
                                            value={categoria.id_categoria} />
                                    ))}
                                </Picker>
                            </View>
                        )} />

                        <Controller
                            control={control}
                            name="descripcion"
                            render={({ field: { onChange, value } }) => (
                                <TextInput label="Descripción" value={value} onChangeText={onChange} mode="outlined" multiline style={styles.input} />
                            )} />

                        <Button style={styles.boton}
                            mode="contained"
                            onPress={handleSubmit(guardarProducto)}
                            loading={loading}
                            disabled={loading}>
                            Guardar producto
                        </Button>
                    {/* </View> */}
                </ScrollView>
            </KeyboardAvoidingView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {

        padding: 20,
        gap: 15,
    },
    input: {
        backgroundColor: "white",
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        marginBottom: 15,
        overflow: "hidden"
    }, boton: {
        backgroundColor: "#A855F7",
    }
});