import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignIn from "../screens/SignIn"
import SignUp from "../screens/SignUp"

const Stack = createNativeStackNavigator()

const AuthRoutes: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="sign-in"
                component={SignIn}
            />

            <Stack.Screen
                name="sign-up"
                component={SignUp}
            />
        </Stack.Navigator>
    )
}

export default AuthRoutes