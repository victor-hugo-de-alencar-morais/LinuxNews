import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../contexts/AuthContext";
import AppRoutes from "../routes/AppRoutes";         

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}