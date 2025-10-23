import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
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
    rating: 4.8,
    reviews: 320,
    description:
      "Plongez dans la douceur réconfortante de notre chocolat chaud onctueux et crémeux, préparé avec un mélange riche de cacao pur et de lait frais, délicatement sucré pour éveiller vos sens. Servi bien chaud, il offre une texture veloutée et une saveur chocolatée intense, parfait pour se réchauffer et se détendre à tout moment de la journée.",
  },
  {
    id: 2,
    title: "Latte",
    descTitle: "Doux crémeux",
    price: "27 DH",
    image: require("@/assets/images/latte.jpg"),
    category: "Latte",
    rating: 4.7,
    reviews: 245,
    description:
      "Un latte doux et crémeux préparé avec un espresso premium et du lait vapeur, surmonté d'une mousse délicate. L'équilibre parfait entre café et lait crée une boisson réconfortante, à la fois riche et douce en bouche.",
  },
  {
    id: 3,
    title: "Espresso",
    descTitle: "Intense corsé",
    price: "14 DH",
    image: require("@/assets/images/espresso.jpg"),
    category: "Espresso",
    rating: 4.9,
    reviews: 412,
    description:
      "Un shot intense de pure excellence caféinée. Notre espresso est préparé à partir de grains soigneusement sélectionnés, offrant une saveur riche et corsée avec des notes de chocolat noir et une finition douce.",
  },
  {
    id: 4,
    title: "Ice Coffee",
    descTitle: "Frais glacé",
    price: "30 DH",
    image: require("@/assets/images/iceCoffe.jpg"),
    category: "Moka",
    rating: 4.6,
    reviews: 189,
    description:
      "Rafraîchissant et revigorant, notre café glacé est infusé à la perfection et servi avec des glaçons. Un remontant parfait pour les journées chaudes, combinant la saveur robuste de notre café signature avec une fraîcheur glacée.",
  },
  {
    id: 5,
    title: "Cappuccino",
    descTitle: "Crémeux mousse",
    price: "25 DH",
    image: require("@/assets/images/caffeCrem.jpg"),
    category: "All Coffe",
    rating: 4.8,
    reviews: 356,
    description:
      "Un classique italien favori, notre cappuccino combine à parts égales espresso, lait vapeur et mousse de lait. Le résultat est une boisson parfaitement équilibrée avec une saveur de café riche et une texture veloutée.",
  },
  {
    id: 6,
    title: "Normal",
    descTitle: "Simple classique",
    price: "15 DH",
    image: require("@/assets/images/normal.jpg"),
    category: "Espresso",
    rating: 4.5,
    reviews: 198,
    description:
      "Un café simple et classique pour les puristes. Préparé avec des grains de qualité, ce café offre une saveur authentique et équilibrée, parfait pour commencer votre journée ou pour une pause café traditionnelle.",
  },
];

export default function details() {
  const { id } = useLocalSearchParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const coffee = coffeeList.find((c) => c.id === Number(id));

  if (!coffee) {
    return (
      <View style={styles.container}>
        <Text>Café non trouvé</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Detail</Text>

        <Pressable
          style={styles.favoriteButton}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Text style={styles.favoriteIcon}>{isFavorite ? "❤️" : "🤍"}</Text>
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        <Image source={coffee.image} style={styles.coffeeImage} />
      </View>

      <Text style={styles.coffeeName}>{coffee.title}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.category}>{coffee.descTitle}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.starIcon}>⭐</Text>
          <Text style={styles.rating}>{coffee.rating}</Text>
          <Text style={styles.reviews}>({coffee.reviews})</Text>
        </View>
      </View>
      <View style={styles.barSeparator}></View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{coffee.description}</Text>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 24,
    color: "#333",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  favoriteButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteIcon: {
    fontSize: 24,
  },
  imageContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  coffeeImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
  },
  coffeeName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  barSeparator: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#aba8a8ff",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  category: {
    fontSize: 14,
    color: "#999",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    fontSize: 18,
    marginRight: 5,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginRight: 5,
  },
  reviews: {
    fontSize: 14,
    color: "#999",
  },
  descriptionContainer: {
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
    fontStyle: "italic",
  },
});
