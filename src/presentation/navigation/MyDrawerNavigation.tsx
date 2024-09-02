import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Alert, Image, StyleSheet, useWindowDimensions } from "react-native";
import { Button, Input, Layout } from "@ui-kitten/components";
import { MyIcon } from "../components/ui/MyIcon";
import { MyStackNavigator } from "./MyStackNavigator";

export default function MyDrawerNavigator() {
  const Drawer = createDrawerNavigator();
  const dimensiones = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensiones.width >= 758 ? "permanent" : "slide",

        headerShown: false,
        drawerActiveBackgroundColor: "grey",
        drawerActiveTintColor: "white",
        drawerInactiveBackgroundColor: "white",
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}
    >
      <Drawer.Screen name="MyStackNavigator" component={MyStackNavigator} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const iconUser = require("../../assets/user_icon.png");

  return (
    <DrawerContentScrollView style={{ marginTop: 10 }}>
      <Layout style={style.imageContainer}>
        <Image source={iconUser} style={style.image} />
      </Layout>
      <Layout style={style.userContainer}>
        <Input
          label="Nombre"
          style={style.userData}
          value="Enriqueta Achahue Sullo"
          keyboardType="default"
          accessoryLeft={<MyIcon name="person-outline" />}
        />
        <Input
          label="Correo"
          style={style.userData}
          value="verito20@gmail.com"
          keyboardType="email-address"
          accessoryLeft={<MyIcon name="email-outline" />}
        />
        <Input
          label="Direccion"
          style={style.userData}
          value="Av. De la Cultura 3010 Jiron con Prado"
          multiline
          accessoryLeft={<MyIcon name="map-outline" />}
        />
        <Input
          label="Numero"
          style={style.userData}
          value="987546532"
          multiline
          keyboardType="numeric"
          accessoryLeft={<MyIcon name="phone-outline" />}
        />
      </Layout>
      <Layout>
        <Button
          style={{
            ...style.userContainer,
            marginTop: 20,
          }}
          onPress={() => {
            Alert.alert("Actualizacion", "Datos Actualizados Corretamente");
          }}
        >
          Guardar
        </Button>
      </Layout>

      <Layout>
        <Button
          style={{
            ...style.userContainer,
            marginTop: 280,
          }}
          status="danger"
          appearance="ghost"
          onPress={() => {}}
        >
          Cerrar Sesión
        </Button>
      </Layout>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const style = StyleSheet.create({
  nameText: {
    fontStyle: "normal",
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 15,
  },
  imageContainer: {
    height: 150,
    //backgroundColor: "green",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderColor: "black",
    borderRadius: 75,
    backgroundColor: "grey",
  },
  userContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
  },
  userData: {},
});
