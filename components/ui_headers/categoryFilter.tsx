import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";

const categories = [
  "Todos",
  "Mouse",
  "Teclados",
  "Pantallas",
  "Audífonos",
];

export default function CategoryFilter() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.button}
        >
          <Text style={styles.text}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },

  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },

  text: {
    color: "white",
    fontWeight: "600",
  },
});