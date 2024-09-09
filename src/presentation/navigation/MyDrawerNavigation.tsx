import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {  Image, StyleSheet } from "react-native";
import { Button, Input, Layout } from "@ui-kitten/components";
import { MyIcon } from "../components/ui/MyIcon";
import { useLoginStore } from "../../actions/clientes/login.state";
import { MyStackNavigator } from "./MyStackNavigator";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const Drawer = createDrawerNavigator();

export default function MyDrawerNavigator() {
  
    return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: "slide",
        headerShown: false,
        drawerActiveBackgroundColor: "grey",
        drawerActiveTintColor: "white",
        drawerInactiveBackgroundColor: "white",
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
        swipeEnabled: false,
      }}
    >
    
      <Drawer.Screen name="MyStackNavigator" component={MyStackNavigator} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {  

  const { logout, user } = useLoginStore();
  const navigation = useNavigation();
  const {top} =useSafeAreaInsets()  
  return (
    <DrawerContentScrollView style={{ marginTop: 10 }}>
      <Layout style={style.imageContainer}>
        <Image source={{uri: user && user.photo}} style={style.image} defaultSource={require('../../assets/user_icon.png')}  />
      </Layout>
      <Layout style={style.userContainer}>
        <Input
          label="Nombre"
          style={style.userData}
          value={user && (user.names +' '+user.lastnames)  }
          keyboardType="default"
          multiline
          accessoryLeft={<MyIcon name="person-outline" />}
        />
        <Input
          label="Correo"
          style={style.userData}
          value={user && user.email}
          keyboardType="email-address"
          accessoryLeft={<MyIcon name="email-outline" />}
        />      
        <Input
          label="Direccion"
          style={style.userData}
          value={user && user.address}
          multiline
          accessoryLeft={<MyIcon name="map-outline" />}
        />
        <Input
          label="Numero"
          style={style.userData}
          value={user && user.phone}
          multiline
          keyboardType="numeric"
          accessoryLeft={<MyIcon name="phone-outline" />}
        />
      </Layout>
      {/* <Layout>
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
      </Layout> */}

      <Layout>
        <Button
          style={{
            ...style.userContainer,
            marginTop: top,
          }}
          status="danger"
          appearance="ghost"
          onPress={() => {
            logout(), navigation.dispatch(DrawerActions.closeDrawer);
          }}
        >
          Cerrar Sesión
        </Button>
      </Layout>

      {/* lista de menus
       <DrawerItemList {...props} /> */}
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
