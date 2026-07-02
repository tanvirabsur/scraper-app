import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Colors from "../theme/color";
import { Business } from "../types";

interface Props {
  item: Business;
  onPreview: (business: Business) => void;
}

const BusinessRow: React.FC<Props> = ({
  item,
  onPreview,
}) => {
  return (
    <View style={styles.row}>

      <View style={styles.nameContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.name}
        >
          {item.name}
        </Text>
      </View>

      <Text style={styles.rating}>
        ⭐ {item.rating}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onPreview(item)}
      >
        <Text style={styles.buttonText}>
          View
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default BusinessRow;

const styles = StyleSheet.create({

  row: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#fff",

    paddingVertical: 14,

    paddingHorizontal: 15,

    marginBottom: 12,

    borderRadius: 12,

    borderWidth: 1,

    borderColor: Colors.border,
  },

  nameContainer: {
    flex: 1,
    marginRight: 10,
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.title,
  },

  rating: {
    width: 65,
    textAlign: "center",
    color: Colors.title,
    fontWeight: "600",
  },

  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});