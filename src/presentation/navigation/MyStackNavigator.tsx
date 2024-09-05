import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CargosScreen,
  CargosScreenRU,
  CitasScreen,
  EmpleadosScreen,
  HomeScreen,
  LoginScreen,
  UbigeoScreen,
} from "../screens";
import { MyRootStackScreens } from "./ScreenNavigations";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";

const Stack = createStackNavigator<MyRootStackScreens>();
export const MyStackNavigator = () => {
  const navigation = useNavigation<NavigationProp<MyRootStackScreens>>();
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Menu Principal",
          headerLeft: () => (
            <MaterialCommunityIcons
              name="card-account-details"
              size={25}
              style={{ marginLeft: 20 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
            />
          ),
        }}
      />
      <Stack.Screen name="CargosScreen" component={CargosScreen} />
      <Stack.Screen name="EmpleadosScreen" component={EmpleadosScreen} />
      <Stack.Screen name="UbigeoScreen" component={UbigeoScreen} />
      <Stack.Screen name="CargosScreenRU" component={CargosScreenRU} />
      <Stack.Screen name="CitasScreen" component={CitasScreen} options={{title:'Mis Citas'}} />





      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
