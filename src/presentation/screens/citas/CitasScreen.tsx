import React from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { Text } from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";
interface Props extends StackScreenProps<MyRootStackScreens, "CitasScreen"> {}

export const CitasScreen = ({ route }: Props) => {
  const { ClienteId } = route.params;
  
  return (
    <MyCustomLayout>
      <Text>CitasScreen del paciente {ClienteId} </Text>
    </MyCustomLayout>
  );
};
