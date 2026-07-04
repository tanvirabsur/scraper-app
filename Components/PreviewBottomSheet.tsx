import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Colors from "../theme/color";
import { Business } from "../types";

interface Props {
  visible: boolean;
  business: Business | null;
  onClose: () => void;
  onViewDetails: () => void;
}

const PreviewBottomSheet: React.FC<Props> = ({
  visible,
  business,
  onClose,
  onViewDetails,
}) => {
  if (!business) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View style={styles.overlay}>
        <View style={styles.sheet}>

          <Text style={styles.title}>
            Business Preview
          </Text>

          <Text style={styles.label}>Business</Text>
          <Text style={styles.value}>{business.name}</Text>

          <Text style={styles.label}>Rating</Text>
          <Text style={styles.value}>⭐ {business.rating}</Text>

          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>{business.address}</Text>

          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>{business.phone}</Text>

          <Text style={styles.label}>Website</Text>
          <Text style={styles.value}>{business.website}</Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={onViewDetails}
          >
            <Text style={styles.primaryText}>
              View Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeText}>
              Close
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

export default PreviewBottomSheet;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: Colors.title,
  },

  label: {
    fontWeight: "600",
    marginTop: 12,
    color: Colors.text,
  },

  value: {
    marginTop: 4,
    color: Colors.title,
  },

  primaryButton: {
    marginTop: 24,
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  primaryText: {
    color: "#fff",
    fontWeight: "700",
  },

  closeButton: {
    marginTop: 12,
    alignItems: "center",
    padding: 15,
  },

  closeText: {
    color: Colors.text,
    fontWeight: "600",
  },
});