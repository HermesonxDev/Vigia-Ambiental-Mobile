import { NavigationContainer } from "@react-navigation/native"
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"
import { useGlobal } from "../hooks/Global"

const Routes: React.FC = () => {

    const { logged } = useGlobal()

    return (
        <NavigationContainer>
            {logged ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}

export default Routes