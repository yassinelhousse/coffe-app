import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const coffeeList = [
  {
    id: 1,
    name: "Espresso",
    emoji: "☕",
    price: "25 MAD",
    description: "Café court et intense",
    category: "Classique",
  },
  {
    id: 2,
    name: "Cappuccino",
    emoji: "🥛",
    price: "35 MAD",
    description: "Espresso avec mousse de lait",
    category: "Classique",
  },
  {
    id: 3,
    name: "Latte",
    emoji: "🍶",
    price: "38 MAD",
    description: "Café doux avec beaucoup de lait",
    category: "Classique",
  },
  {
    id: 4,
    name: "Americano",
    emoji: "☕",
    price: "28 MAD",
    description: "Espresso allongé à l'eau",
    category: "Classique",
  },
  {
    id: 5,
    name: "Mocha",
    emoji: "🍫",
    price: "42 MAD",
    description: "Café au chocolat et crème",
    category: "Spécial",
  },
  {
    id: 6,
    name: "Macchiato",
    emoji: "☕",
    price: "30 MAD",
    description: "Espresso avec touche de lait",
    category: "Classique",
  },
  {
    id: 7,
    name: "Flat White",
    emoji: "🥛",
    price: "40 MAD",
    description: "Espresso avec lait velouté",
    category: "Spécial",
  },
  {
    id: 8,
    name: "Caramel Latte",
    emoji: "🍮",
    price: "45 MAD",
    description: "Latte avec sirop caramel",
    category: "Spécial",
  },
];

export default function Menu() {
  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.title}>Notre Menu ☕</Text>
        <Text style={styles.subtitle}>Choisissez votre café préféré</Text>
      </View>

      {/* Liste des cafés */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {coffeeList.map((coffee) => (
          <Pressable
            key={coffee.id}
            style={styles.coffeeCard}
            onPress={() =>
              router.push(`/details?id=${coffee.id}&name=${coffee.name}`)
            }
          >
            {/* Badge catégorie */}
            <View
              style={[
                styles.badge,
                coffee.category === "Spécial"
                  ? styles.badgeSpecial
                  : styles.badgeClassic,
              ]}
            >
              <Text style={styles.badgeText}>{coffee.category}</Text>
            </View>

            {/* Contenu principal */}
            <View style={styles.coffeeContent}>
              <Text style={styles.coffeeEmoji}>{coffee.emoji}</Text>

              <View style={styles.coffeeInfo}>
                <Text style={styles.coffeeName}>{coffee.name}</Text>
                <Text style={styles.coffeeDescription}>
                  {coffee.description}
                </Text>
              </View>
            </View>

            {/* Prix et flèche */}
            <View style={styles.coffeeFooter}>
              <Text style={styles.coffeePrice}>{coffee.price}</Text>
              <Text style={styles.arrow}>→</Text>
            </View>
          </Pressable>
        ))}

        {/* Espace en bas */}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4ede4",
  },
  header: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: "#f4ede4",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6b3e26",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#8B6F47",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  coffeeCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  badge: {
    position: "absolute",
    top: 12,
    right: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeClassic: {
    backgroundColor: "#e8f5e9",
  },
  badgeSpecial: {
    backgroundColor: "#fff3e0",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#6b3e26",
  },
  coffeeContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  coffeeEmoji: {
    fontSize: 48,
    marginRight: 15,
  },
  coffeeInfo: {
    flex: 1,
  },
  coffeeName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6b3e26",
    marginBottom: 4,
  },
  coffeeDescription: {
    fontSize: 13,
    color: "#999",
  },
  coffeeFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 12,
  },
  coffeePrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6b3e26",
  },
  arrow: {
    fontSize: 20,
    color: "#6b3e26",
  },
});
