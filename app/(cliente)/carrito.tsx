import { useMemo, useState } from "react";
import {View, Text, StyleSheet, FlatList, Image,} from "react-native";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";
import { IconButton, Button } from "react-native-paper";
import HeadersSimple from "@/components/headers/headersSimple";
import { router } from "expo-router";

export default function Carrito() {

  const [productos, setProductos] = useState([
    {
      id: "1",
      nombre: "Teclado gamer RGB blanco",
      precio: 200000,
      cantidad: 1,
      seleccionado: true,
      imagen: require("../../assets/images/proyector.jpg"),
    },
    {
      id: "2",
      nombre: "Proyector",
      precio: 400000,
      cantidad: 1,
      seleccionado: true,
      imagen: require("../../assets/images/teclado (1).jpg"),
    },
  ]);

  const todosSeleccionados = productos.every(
    (producto) => producto.seleccionado
  );

  function toggleTodos(valor: boolean) {
    const nuevosProductos = productos.map((producto) => ({
      ...producto,
      seleccionado: valor,
    }));

    setProductos(nuevosProductos);
  }

  function toggleProducto(id: string) {
    const nuevosProductos = productos.map((producto) =>
      producto.id === id
        ? {
          ...producto,
          seleccionado: !producto.seleccionado,
        }
        : producto
    );

    setProductos(nuevosProductos);
  }

  function cambiarCantidad(id: string, cantidad: number) {
    const nuevosProductos = productos.map((producto) =>
      producto.id === id
        ? {
          ...producto,
          cantidad,
        }
        : producto
    );

    setProductos(nuevosProductos);
  }

  const total = useMemo(() => {
    return productos
      .filter((producto) => producto.seleccionado)
      .reduce(
        (acc, producto) =>
          acc + producto.precio * producto.cantidad,
        0
      );
  }, [productos]);

  const cantidadSeleccionados = productos.filter(
    (p) => p.seleccionado
  ).length;

  return (
    <>
      <HeadersSimple title="Carrito" />
      <View style={styles.container}>

        <View style={styles.header}>
          <Checkbox
            value={todosSeleccionados}
            onValueChange={toggleTodos}
            color="#9333ea" />

          <Text style={styles.headerText}>
            Todos los productos
          </Text>
        </View>

        <FlatList
          data={productos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <View style={styles.card}>
              <Checkbox
                value={item.seleccionado}
                onValueChange={() => toggleProducto(item.id)}
                color="#9333ea" />

              <Image
                source={item.imagen}
                style={styles.image} />

              <View style={styles.info}>

                <Text style={styles.nombre}>
                  {item.nombre}
                </Text>

                <Text style={styles.precio}>
                  $ {item.precio.toLocaleString()}
                </Text>

                <View style={styles.spinner}>
                  <Picker
                    selectedValue={item.cantidad}
                    onValueChange={(value) =>
                      cambiarCantidad(item.id, value)
                    }
                    style={{ height: 50, width: 130 }}>
                    <Picker.Item label="1 unidad" value={1} />
                    <Picker.Item label="2 unidades" value={2} />
                    <Picker.Item label="3 unidades" value={3} />
                    <Picker.Item label="4 unidades" value={4} />
                    <Picker.Item label="5 unidades" value={5} />
                    <Picker.Item label="6 unidades" value={6} />
                    <Picker.Item label="7 unidades" value={7} />
                    <Picker.Item label="8 unidades" value={8} />
                    <Picker.Item label="9 unidades" value={9} />
                    <Picker.Item label="10 unidades" value={10} />
                    <Picker.Item label="11 unidades" value={11} />
                    <Picker.Item label="12 unidades" value={12} />
                    <Picker.Item label="13 unidades" value={13} />
                  </Picker>
                </View>
              </View>

              <IconButton
                icon="delete"
                iconColor="red"
                onPress={() => { }}
              />
            </View>
          )}
        />

        <View style={styles.footer}>

          <View>
            <Text style={styles.productos}>
              Productos ({cantidadSeleccionados})
            </Text>

            <Text style={styles.total}>
              $ {total.toLocaleString()}
            </Text>
          </View>

          <Button
            mode="contained"
            style={styles.button}
            onPress={() => router.push("/pagos")}>
            Continuar ({cantidadSeleccionados})
          </Button>
        </View>
      </View>
  </>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },

  headerText: {
    marginLeft: 8,
    fontWeight: "500",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d4d4d4",
    padding: 10,
    marginTop: 8,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginHorizontal: 10,
  },

  info: {
    flex: 1,
  },

  nombre: {
    fontSize: 18,
    fontWeight: "bold"

  },

  precio: {
    fontSize: 15,
    fontWeight: "bold",
  },

  spinner: {
    width: 130,
    backgroundColor: "#c4c4c4",
    marginTop: 4,
  },

  footer: {
    backgroundColor: "white",
    padding: 14,
  },

  productos: {
    fontSize: 12,
    color: "#444",
  },

  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },

  button: {
    marginTop: 12,
    backgroundColor: "#a855f7",
  },
});