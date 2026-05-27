import { View, StyleSheet, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

type HeaderSimpleProps = {
        title: string;
};

export default function HeadersSimple({ title }: HeaderSimpleProps) {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Pressable onPress={() => router.replace("..")} hitSlop={10} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={32} color="white" />
                </Pressable>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#A855F7",
        height:106,
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
    backButton: {
        padding: 8,
        borderRadius: 999,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
});