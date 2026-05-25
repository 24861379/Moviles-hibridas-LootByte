import { View, StyleSheet, TouchableOpacity } from "react-native";
import SearchBar from "../ui_headers/searchBar";
import CategoryFilter from "../ui_headers/categoryFilter";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function HeaderBusqueda() {
    const [favorito, setFavorito] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <SearchBar />

                <TouchableOpacity
                    style={[styles.heartButton, favorito && styles.heartButtonActive]}
                    onPress={() => setFavorito(!favorito)}
                    accessibilityLabel="Favoritos"
                >
                    <Ionicons
                        name={favorito ? "heart" : "heart-outline"}
                        size={26}
                        color={favorito ? "#FF5A5F" : "white"}
                    />
                </TouchableOpacity>
            </View>

            <CategoryFilter />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#A855F7",
        paddingTop: 50,
        paddingHorizontal: 15,
        paddingBottom: 10,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginBottom: 10,
    },

    topRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
    },

    heartButton: {
        padding: 6,
        borderRadius: 20,
    },

    heartButtonActive: {
        backgroundColor: "rgba(255,90,95,0.12)",
    },
});
