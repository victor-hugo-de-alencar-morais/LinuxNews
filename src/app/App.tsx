import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./contexts/AuthContext";   // ajuste o caminho
import AppRoutes from "./routes/AppRoutes";               // verifique o caminho

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}