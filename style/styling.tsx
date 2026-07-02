import { StyleSheet } from "react-native";
import Colors from "../theme/color";


const styles = StyleSheet.create({
   body: {
      padding: 20,
      backgroundColor: 'black',
   },
   container: {
        height: 58,
        backgroundColor: "#fff",
        borderRadius: 14,
        borderWidth: 1,
        borderColor: Colors.border,
        justifyContent: "center",
        paddingHorizontal: 18,
        marginTop: 10
    },

    input: {
        fontSize: 16,
        color: Colors.title

    }
})

export default styles;