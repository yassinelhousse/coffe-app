import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type CoffeeCardProps = {
  id: number;
  title: string;
  price: string;
  image: any;
  descTitle: string;
};

export default function CoffeeCard({
  id,
  title,
  price,
  image,
  descTitle,
}: CoffeeCardProps) {
  return (
    <Pressable
      style={styles.coffeeCard}
      onPress={() => router.push(`/details?id=${id}`)}
    >
      <Image source={image} style={styles.coffeeImage} />

      <Text style={styles.coffeeName}>{title}</Text>
      <Text style={styles.coffeeSubtext}>{descTitle}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.coffeePrice}>{price}</Text>
        <Pressable style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  coffeeCard: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 16,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  coffeeImage: {
    width: "100%",
    height: 160,
    backgroundColor: "#e0e0e0",
  },
  coffeeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 12,
    marginHorizontal: 12,
  },
  coffeeSubtext: {
    fontSize: 12,
    color: "#999",
    marginHorizontal: 12,
    marginTop: 2,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    marginTop: 8,
    marginBottom: 12,
  },
  coffeePrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  addButton: {
    backgroundColor: "#a68a6e",
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
