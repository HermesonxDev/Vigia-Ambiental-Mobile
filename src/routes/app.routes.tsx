import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons"
import { createDrawerNavigator } from "@react-navigation/drawer";
import ReportLocation from "../screens/ReportLocation";
import ListReports from "../screens/ListReports";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import SignOut from "../screens/SignOut";

const Tab = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="home-tab"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: 'Início' 
                }}
            />

            <Tab.Screen
                name="report-location"
                component={ReportLocation}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: 'Denunciar Local'
                }}
            />

            <Tab.Screen
                name="list-reports"
                component={ListReports}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="list" color={color} size={size} />,
                    tabBarLabel: 'Acomp. Denuncias'
                }}
            />
        </Tab.Navigator>
    )
}

const Drawer = createDrawerNavigator()

const AppRoutes: React.FC = () => {
    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen
                name="home-drawer"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    drawerLabel: 'Início'
                }}
            />

            <Drawer.Screen
                name="profile"
                component={Profile}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    drawerLabel: 'Perfil'
                }}
            />

            <Drawer.Screen
                name="sign-out"
                component={SignOut}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="log-out" color={color} size={size} />,
                    drawerLabel: 'Sair'
                }}
            />
        </Drawer.Navigator>
    )
}

export default AppRoutes