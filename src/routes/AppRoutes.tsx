import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../contexts/AuthContext"; 

import AuthRoutes from "./AuthRoutes";
import DrawerRoutes from "./DrawerRoutes";
import ListVersionScreen from "../screens/ListVersionScreen";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  const { user } = useContext(AuthContext); // user será null se não autenticado

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        // Usuário autenticado: Stack com Drawer + telas extras
        <>
          <Stack.Screen name="Drawer" component={DrawerRoutes} />
          <Stack.Screen
            name="ListVersion"
            component={ListVersionScreen}
            options={{
              headerShown: true,
              title: 'Versões',
              headerStyle: { backgroundColor: '#1b5e20' },
              headerTintColor: '#fff',
            }}
          />
        </>
      ) : (
        // Não autenticado: apenas rotas públicas
        <Stack.Screen name="Auth" component={AuthRoutes} />
      )}
    </Stack.Navigator>
  );
}