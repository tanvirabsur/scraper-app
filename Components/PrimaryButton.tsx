import React from "react";

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import Colors from "../theme/color";

interface Props {
  title: string;

  onPress: () => void;
}

const PrimaryButton: React.FC<Props> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: Colors.primary,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});