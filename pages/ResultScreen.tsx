import React, { useState } from "react";
import {

  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BusinessTable from "../Components/BusinessTable";
import Colors from "../theme/color";
import { Business } from "../types";
import PreviewBottomSheet from "../Components/PreviewBottomSheet";

const dummyData: Business[] = [

  {
    id: "1",
    name: "Starbucks Coffee Manhattan Branch",
    rating: "4.8",
    address: "New York",
    phone: "+1 123456789",
    website: "https://starbucks.com",
  },

  {
    id: "2",
    name: "Pizza Hut Downtown",
    rating: "4.5",
    address: "California",
    phone: "+1 88888888",
    website: "https://pizzahut.com",
  },

  {
    id: "3",
    name: "Burger King Main Branch",
    rating: "4.6",
    address: "Texas",
    phone: "+1 99999999",
    website: "https://bk.com",
  },

];

const ResultScreen = () => {
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePreview = (business: Business) => {
    setSelectedBusiness(business);
    setModalVisible(true);
  };


  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Search Results
      </Text>

      <Text style={styles.subtitle}>
        3 Businesses Found
      </Text>

      <BusinessTable

        data={dummyData}

        onPreview={handlePreview}

      />
      <PreviewBottomSheet
        visible={modalVisible}
        business={selectedBusiness}
        onClose={() => setModalVisible(false)}
        onViewDetails={() => {
          setModalVisible(false);
          // Next Part
        }}
      />
    </SafeAreaView>

  );
};

export default ResultScreen;

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: Colors.background,

    padding: 20,

  },

  title: {

    fontSize: 28,

    fontWeight: "700",

    color: Colors.title,

  },

  subtitle: {

    color: Colors.text,

    marginTop: 5,

  },

});