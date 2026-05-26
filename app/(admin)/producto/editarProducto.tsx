import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import HeadersSimple from "../../../components/headers/headersSimple";
import { Categoria } from "../../../models/categoria";
import { Color } from "../../../models/color";
import { cargarCategorias } from "../../../services/categoriaServices";
import { cargarColores } from "../../../services/colorService";
import { actualizarProducto, obtenerProducto } from "../../../services/productoService";

export default function EditarProducto() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [colores, setColores] = useState<Color[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const params = useLocalSearchParams();
    const id = params.id as string;

    const { control, handleSubmit, reset } = useForm();

    useEffect(() => {
        async function cargarDatos() {
            const categoriasData = await cargarCategorias();
            const coloresData = await cargarColores();
            setCategorias(categoriasData);
            setColores(coloresData);

            if (id) {
                const producto = await obtenerProducto(id);
                if (producto) {
                    reset({
                        nombre_producto: producto.nombre_producto,
                        codigo_producto: producto.codigo_producto,
                        precio_producto: producto.producto_color?.[0]?.precio?.toString() || "",
                        stock_producto: producto.producto_color?.[0]?.stock?.toString() || "",
                        colores_producto: producto.producto_color?.[0]?.id_color_FK || "",
                        categoria_producto: producto.id_categoria_FK || "",
                        descripcion: producto.descripcion || "",
                    });
                    if (producto.foto_producto) {
                        setImage(producto.foto_producto);
                    }
                }
            }
        }
        cargarDatos();
    }, [id]);

    async function guardarProducto(data: any) {
        if (!data.nombre_producto?.trim()) {
            Alert.alert("Error", "Ingrese nombre");
            return;
        }

        setLoading(true);
        const resultado = await actualizarProducto(id, data, image);
        setLoading(false);

        if (resultado.success) {
            Alert.alert("Éxito", "Producto actualizado correctamente");
            router.back();
        } else {
            const mensajeError = resultado && resultado.error
                ? (typeof resultado.error === 'string' ? resultado.error : String(resultado.error))
                : "No se pudo actualizar el producto";
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
            quality: 0.7,
        });
        if (!resultado.canceled) {
            setImage(resultado.assets[0].uri);
        }
    }

    return (
        <>
            <HeadersSimple title="Editar producto" />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                        <Button mode="outlined" onPress={seleccionarImagen}>
                            Seleccionar imagen
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
                            Guardar cambios
                        </Button>
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
