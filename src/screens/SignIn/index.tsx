import { Text, View } from "react-native"
import { styles } from "./styles"
import Title from "../../components/Title"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useState } from "react"
import { AuthForm } from "../../utils/interfaces"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { AuthStackRoutes } from "../../utils/types"
import { useGlobal } from "../../hooks/Global"
import Loading from "../../components/Loading"

const SignIn: React.FC = () => {

    const { loading, signIn } = useGlobal()

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackRoutes>>();

    const [formState, setFormState] = useState<AuthForm>({
        email: '',
        password: ''
    })

    const handleChangeForm = (value: string, key: keyof AuthForm) => {
        setFormState((prev) => ({
             ...prev,
             [key]: value
        }))
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Title>Login</Title>

                <View style={styles.fields}>
                    <View style={styles.field}>
                        <Text style={styles.label}>Email</Text>
                        <Input
                            onChangeText={(text) => handleChangeForm(text, 'email')}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Senha</Text>
                        <Input
                            onChangeText={(text) => handleChangeForm(text, 'password')}
                        />
                    </View>

                    <Text style={styles.registerText}>
                        Não tem acesso ainda?
                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate('sign-up')}
                        > Registrar</Text>
                        .
                    </Text>
                </View>

                {!loading
                    ? <Button
                        activeOpacity={0.9}
                        onPress={() => signIn(formState)}
                      >Entrar</Button>
                    : <Loading />
                }
            </View>
        </View>
    )
}

export default SignIn