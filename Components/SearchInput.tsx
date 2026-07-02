import React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    TextInputProps,
} from "react-native";

import Colors from "../theme/color";

interface Props extends TextInputProps { }

const SearchInput: React.FC<Props> = ({
    ...props
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor={Colors.placeholder}
                style={styles.input}
                {...props}
            />
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: Colors.card,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 14,
        justifyContent: "center",
        paddingHorizontal: 18,
    },

    input: {
        fontSize: 16,
        color: Colors.title,
    },
});