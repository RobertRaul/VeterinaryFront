import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CargosScreen, CargosScreenRU, EmpleadosScreen, HomeScreen, LoginScreen, UbigeoScreen } from "../screens";


export type MyRootStackParams = {
  LoginScreen:undefined
  
  HomeScreen: undefined;

  CargosScreen: undefined;
  CargosScreenRU: { CargoId: number };

  EmpleadosScreen: undefined;
  UbigeoScreen: undefined;
};

const Stack = createStackNavigator<MyRootStackParams>();

export const MyStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">      
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CargosScreen" component={CargosScreen} />
      <Stack.Screen name="EmpleadosScreen" component={EmpleadosScreen} />
      <Stack.Screen name="UbigeoScreen" component={UbigeoScreen} />      
      <Stack.Screen name="CargosScreenRU" component={CargosScreenRU} />      
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};
