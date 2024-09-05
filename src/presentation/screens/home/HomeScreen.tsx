import React from "react";
import { MyCustomLayout } from "../../components/ui/MyCustomLayout";
import { ScrollView } from "react-native";
import { EmpleadosItems } from "./MenuItems";
import { MyMenuItem } from "../../components/ui/MyMenuItem";
import { Button } from "@ui-kitten/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLoginStore } from "../../../actions/clientes/login.state";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MyRootStackScreens } from "../../navigation/ScreenNavigations";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<MyRootStackScreens>>();
  const { user } = useLoginStore();
  return (
    <MyCustomLayout>
      <ScrollView>
        {/* {EmpleadosItems.map((item, index) => (
          <MyMenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === EmpleadosItems.length - 1}
          ></MyMenuItem>
        ))} */}
        <Button
          size="large"
          accessoryLeft={
            <MaterialCommunityIcons name="doctor" size={30} color="white" />
          }
          onPress={() =>
            navigation.navigate("CitasScreen", {
              ClienteId: Number(user.IdCliente),
            })
          }
        >
          Citas
        </Button>
      </ScrollView>
    </MyCustomLayout>
  );
};
