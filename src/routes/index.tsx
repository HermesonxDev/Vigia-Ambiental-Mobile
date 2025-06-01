import { NavigationContainer } from "@react-navigation/native"
import AppRoutes from "./app.routes"
import AuthStackRoutes from "./auth.routes"
import { useGlobal } from "../hooks/Global"

const Routes: React.FC = () => {

    const { logged } = useGlobal()

    return (
        <NavigationContainer>
            {logged ? <AppRoutes /> : <AuthStackRoutes />}
        </NavigationContainer>
    )
}

export default Routes