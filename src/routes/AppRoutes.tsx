import AuthRoutes from "./AuthRoutes";
import DrawerRoutes from "./DrawerRoutes";

export default function AppRoutes() {
    const isAuthenticated = true;
    return isAuthenticated ? <DrawerRoutes /> : <AuthRoutes />;
}