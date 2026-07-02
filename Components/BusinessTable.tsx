import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import BusinessRow from "./BusinessRow";
import { Business } from "../types";
import Colors from "../theme/color";

interface Props {
  data: Business[];
  onPreview: (business: Business) => void;
}

const BusinessTable: React.FC<Props> = ({
  data,
  onPreview,
}) => {
  return (
    <View style={styles.container}>

      {/* Table Header */}

      <View style={styles.header}>

        <Text style={[styles.heading, { flex: 1 }]}>
          Business
        </Text>

        <Text style={[styles.heading, { width: 70 }]}>
          Rating
        </Text>

        <Text style={[styles.heading, { width: 70 }]}>
          Action
        </Text>

      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BusinessRow
            item={item}
            onPreview={onPreview}
          />
        )}
      />

    </View>
  );
};

export default BusinessTable;

const styles = StyleSheet.create({

  container: {
    marginTop: 20,
  },

  header: {

    flexDirection: "row",

    paddingHorizontal: 15,

    paddingVertical: 12,

    backgroundColor: "#EEF4FF",

    borderRadius: 10,

    marginBottom: 10,
  },

  heading: {

    color: Colors.primary,

    fontWeight: "700",

    fontSize: 15,

    textAlign: "center",

  },

});