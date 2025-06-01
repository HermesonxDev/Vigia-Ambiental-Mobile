import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { useGlobal } from "../../hooks/Global"
import Loading from "../../components/Loading"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { AppTabAndDrawerRoutes } from "../../utils/types"

const SignOut: React.FC = () => {

    const navigation = useNavigation<NavigationProp<AppTabAndDrawerRoutes>>()
    const { loading, signOut } = useGlobal()

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                {!loading
                    ? <>
                        <TouchableOpacity
                            style={styles.confirm}
                            activeOpacity={0.9}
                            onPress={signOut}
                        >
                            <Text style={styles.buttonText}>Confirmar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.cancel}
                            activeOpacity={0.9}
                            onPress={() => navigation.navigate('home-drawer')}
                        >
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                      </>
                    : <Loading />
                }
            </View>
        </View>
    )
}

export default SignOut