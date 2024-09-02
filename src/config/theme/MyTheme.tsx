import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  cardBackground: string;
  buttonTextColor: string;
  buttonColor: string;
}

export const colors_light: ThemeColors = {
  primary: "#1ead25",
  text: "black",
  background: "#f3f2f7",
  cardBackground: "white",
  buttonTextColor: "wite",
  buttonColor: "#rgb(52, 49, 206)",
};



export const globalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop:  20,
  },
});

