import CoffeeCard from "@/components/CoffeCard";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const coffeeList = [
  {
    id: 1,
    title: "Hot Chocolat",
    descTitle: "Chaud réconfort",
    price: "20 DH",
    image: require("@/assets/images/hotChocolate.jpg"),
    category: "All Coffe",
  },
  {
    id: 2,
    title: "Latte",
    descTitle: "Doux crémeux",
    price: "27 DH",
    image: require("@/assets/images/latte.jpg"),
    category: "Latte",
  },
  {
    id: 3,
    title: "Espresso",
    descTitle: "Intense corsé",
    price: "14 DH",
    image: require("@/assets/images/espresso.jpg"),
    category: "Espresso",
  },
  {
    id: 4,
    title: "Ice Coffee",
    descTitle: "Frais glacé",
    price: "30 DH",
    image: require("@/assets/images/iceCoffe.jpg"),
    category: "Moka",
  },
  {
    id: 5,
    title: "Cappuccino",
    descTitle: "Crémeux mousse",
    price: "25 DH",
    image: require("@/assets/images/caffeCrem.jpg"),
    category: "All Coffe",
  },
  {
    id: 6,
    title: "Normal",
    descTitle: "Simple classique",
    price: "15 DH",
    image: require("@/assets/images/normal.jpg"),
    category: "Espress",
  },
];

const categories = ["All Coffe", "Latte", "Espresso", "Moka"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All Coffe");
  const [searchText, setSearchText] = useState("");

  const filteredCoffees = coffeeList.filter((coffee) => {
    const matchesCategory =
      selectedCategory === "All Coffe" || coffee.category === selectedCategory;
    const matchesSearch = coffee.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View style={styles.header}>
        <Text style={styles.locationLabel}>Location</Text>
        <Text style={styles.locationText}>Erac Bouargane, Agadir</Text>

        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="search coffe"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <Pressable
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.coffeeGrid}>
        {filteredCoffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            title={coffee.title}
            price={coffee.price}
            descTitle={coffee.descTitle}
            image={coffee.image}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#a68a6e",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 25,
  },
  locationLabel: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 4,
  },
  locationText: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#f5f5f5",
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: "transparent",
  },
  categoryButtonActive: {
    backgroundColor: "#a68a6e",
    height: 40,
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  categoryTextActive: {
    color: "white",
  },
  coffeeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});
