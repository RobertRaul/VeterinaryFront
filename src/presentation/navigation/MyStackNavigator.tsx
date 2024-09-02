import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CargosScreen } from '../screens/empleados/CargosScreen';
import { EmpleadosScreen } from '../screens/empleados/EmpleadosScreen';
import { UbigeoScreen } from '../screens/empleados/UbigeoScreen';
import { HomeScreen } from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

export const MyStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Menu Principal" component={HomeScreen} />
        <Stack.Screen name='CargosScreen' component={CargosScreen} />
        <Stack.Screen name='EmpleadosScreen' component={EmpleadosScreen} />
        <Stack.Screen name='UbigeoScreen' component={UbigeoScreen} />
    </Stack.Navigator>
  )
}
