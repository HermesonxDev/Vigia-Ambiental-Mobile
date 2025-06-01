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

const SignUp: React.FC = () => {

    const { loading, signUp } = useGlobal()

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackRoutes>>();

    const [formState, setFormState] = useState<AuthForm>({
        name: '',
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
                <Title>Registro</Title>

                <View style={styles.fields}>
                    <View style={styles.field}>
                        <Text style={styles.label}>Nome</Text>
                        <Input
                            onChangeText={(text) => handleChangeForm(text, 'name')}
                        />
                    </View>

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
                        Já possui acesso?
                        <Text
                            style={styles.link}
                            onPress={() => navigation.navigate('sign-in')}
                        > Logar</Text>
                        .
                    </Text>
                </View>

                {!loading
                    ? <Button
                        activeOpacity={0.9}
                        onPress={() => signUp(formState)}
                      >Entrar</Button>
                    : <Loading />
                }
            </View>
        </View>
    )
}

export default SignUp