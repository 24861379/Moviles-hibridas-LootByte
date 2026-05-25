import { View, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type HeaderSimpleProps = {
        title: string;
};

export default function HeaderSimplePerfilCliente({ title }: HeaderSimpleProps) { 
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Ionicons name="arrow-back" size={32} color="white" />
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#A855F7",
        height:225,
        paddingTop: 50,
        paddingHorizontal: 15,
        paddingBottom: 10,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginBottom: 10,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
});