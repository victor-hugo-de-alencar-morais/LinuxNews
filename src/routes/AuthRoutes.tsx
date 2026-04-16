import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AboutLinuxScreen from "../screens/AboutLinuxScreen";
import HomeScreen from "../screens/HomeScreen";
import ClientScreen from "../screens/ClientScreen";
import ListVersionScreen from "../screens/ListVersionScreen";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{
                title: ""
            }} />
            <Stack.Screen name="Cadastro" component={RegisterScreen} options={{
                title: ""
            }} />
            <Stack.Screen name="Sobre Linux" component={AboutLinuxScreen} options={{
                title: ""
            }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{
                title: ""
            }} />
            <Stack.Screen name="Tela do cliente" component={ClientScreen} options={{
                title: ""
            }} />
            <Stack.Screen name="Listar versões" component={ListVersionScreen} options={{
                title: ""
            }} />
        </Stack.Navigator>
    );
}