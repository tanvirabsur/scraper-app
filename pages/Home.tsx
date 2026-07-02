import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../theme/color";
import Spacing from "../theme/spacing";
import Typography from "../theme/typography";
import SearchInput from "../Components/SearchInput";
import PrimaryButton from "../Components/PrimaryButton";
import { RootStackParamList } from "../Components/AppNavigator";


type Props = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;


const HomeScreen = ({ navigation }: Props) => {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState("");

const handleSearch = () => {
  navigation.navigate("Result", {
    query,
    limit: Number(limit),
  });
};

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.welcome}>
            👋 Welcome Back
          </Text>

          <Text style={styles.title}>
            Business Finder
          </Text>

          <Text style={styles.subtitle}>
            Search Google Maps businesses instantly.
          </Text>

          <Text style={styles.label}>
            Search Keyword
          </Text>

          <SearchInput
            placeholder="Restaurant in New York"
            value={query}
            onChangeText={setQuery}
          />

          <View style={styles.spacerSmall} />

          <Text style={styles.label}>
            Number of Businesses
          </Text>

          <SearchInput
            placeholder="50"
            keyboardType="numeric"
            value={limit}
            onChangeText={setLimit}
          />

          <View style={styles.spacerMedium} />

          <PrimaryButton
            title="Search Businesses"
            onPress={handleSearch}
          />

          <Text style={styles.recentTitle}>
            Recent Searches
          </Text>

          <View style={styles.chipContainer}>

            <View style={styles.chip}>
              <Text style={styles.chipText}>
                Restaurant
              </Text>
            </View>

            <View style={styles.chip}>
              <Text style={styles.chipText}>
                Hotel
              </Text>
            </View>

            <View style={styles.chip}>
              <Text style={styles.chipText}>
                Hospital
              </Text>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    padding: Spacing.lg,
    paddingBottom: Spacing.xl,
  },

  welcome: {
    fontSize: Typography.small,
    color: Colors.text,
    marginTop: 20,
  },

  title: {
    fontSize: Typography.title,
    fontWeight: "700",
    color: Colors.title,
    marginTop: 5,
  },

  subtitle: {
    fontSize: Typography.body,
    color: Colors.text,
    marginTop: 8,
    marginBottom: 24,
  },

  label: {
    fontSize: Typography.body,
    fontWeight: "600",
    color: Colors.title,
    marginBottom: 10,
  },

  recentTitle: {
    marginTop: 40,
    marginBottom: 15,
    fontSize: Typography.subHeading,
    fontWeight: "700",
    color: Colors.title,
  },

  spacerSmall: {
    height: 20,
  },

  spacerMedium: {
    height: 30,
  },

  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  chip: {
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 30,
    marginRight: 10,
    marginBottom: 10,
  },

  chipText: {
    color: Colors.primary,
    fontWeight: "600",
  },

});