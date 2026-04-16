import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ClientScreen from "../screens/ClientScreen";
import ListVersionScreen from "../screens/ListVersion";
import AboutLinuxScreen from "../screens/AboutLinuxScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Client" component={ClientScreen} />
            <Drawer.Screen name="Listar versões" component={ListVersionScreen} />
            <Drawer.Screen name="Sobre o linux" component={AboutLinuxScreen} />
            <Drawer.Screen name="Logar" component={LoginScreen} />
            <Drawer.Screen name="Registrar" component={RegisterScreen}
            />
        </Drawer.Navigator>
    );
}