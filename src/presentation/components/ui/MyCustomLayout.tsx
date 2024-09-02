import { Layout } from "@ui-kitten/components";
import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { colors_light, globalStyles } from "../../../config/theme/MyTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
interface Properties {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export const MyCustomLayout = ({ style, children }: Properties) => {
  const { top } = useSafeAreaInsets();

  return (
    <Layout
      style={[
        globalStyles.mainContainer,
        style,
        {
          backgroundColor: colors_light.background,          
          marginHorizontal: 20,
        },
      ]}
    >
      {children}
    </Layout>
  );
};
