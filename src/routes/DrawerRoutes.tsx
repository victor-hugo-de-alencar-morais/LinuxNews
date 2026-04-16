import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ClientScreen from "../screens/ClientScreen";
import AboutLinuxScreen from "../screens/AboutLinuxScreen";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1b5e20' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerStyle: { backgroundColor: '#1e1e1e' },
        drawerLabelStyle: { color: '#e0e0e0', fontSize: 16 },
        drawerActiveTintColor: '#81c784',
        drawerInactiveTintColor: '#9e9e9e',
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Drawer.Screen name="Client" component={ClientScreen} options={{ title: 'Meu Perfil' }} />
      <Drawer.Screen name="AboutLinux" component={AboutLinuxScreen} options={{ title: 'Sobre o Linux' }} />
    </Drawer.Navigator>
  );
}