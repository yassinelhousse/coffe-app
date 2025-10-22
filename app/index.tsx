import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function index() {
  return (
    <View style={styles.container}>
      {/* En-tête avec emoji café */}
      <View style={styles.header}>
        <Text style={styles.emoji}>☕</Text>
        <Text style={styles.title}>Coffee App</Text>
        <Text style={styles.subtitle}>Découvrez nos délicieux cafés</Text>
      </View>

      {/* Cartes de navigation */}
      <View style={styles.cardsContainer}>
        {/* Carte Menu */}
        <Pressable style={styles.card} onPress={() => router.push("/menu")}>
          <Text style={styles.cardEmoji}>📋</Text>
          <Text style={styles.cardTitle}>Notre Menu</Text>
          <Text style={styles.cardDescription}>Découvrez tous nos cafés</Text>
        </Pressable>

        {/* Carte Favoris */}
        <Pressable style={styles.card} onPress={() => router.push("/menu")}>
          <Text style={styles.cardEmoji}>❤️</Text>
          <Text style={styles.cardTitle}>Favoris</Text>
          <Text style={styles.cardDescription}>Vos cafés préférés</Text>
        </Pressable>
      </View>

      {/* Bouton principal */}
      <Pressable style={styles.mainButton} onPress={() => router.push("/menu")}>
        <Text style={styles.mainButtonText}>Commander Maintenant</Text>
      </Pressable>

      {/* Info du jour */}
      <View style={styles.promoCard}>
        <Text style={styles.promoTitle}>☀️ Offre du jour</Text>
        <Text style={styles.promoText}>Cappuccino à -20% jusqu'à 15h !</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4ede4",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#6b3e26",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#8B6F47",
    textAlign: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    width: "48%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6b3e26",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },
  mainButton: {
    backgroundColor: "#6b3e26",
    borderRadius: 12,
    padding: 18,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  mainButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  promoCard: {
    backgroundColor: "#fff8dc",
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: "#ffd700",
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6b3e26",
    marginBottom: 5,
  },
  promoText: {
    fontSize: 14,
    color: "#8B6F47",
  },
});
