import { Text, View } from "react-native"
import { styles } from "./styles"
import Title from "../../components/Title"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useState } from "react"
import { AuthForm } from "../../utils/interfaces"

const SignIn: React.FC = () => {

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
                </View>

                <Button activeOpacity={0.9}>Entrar</Button>
            </View>
        </View>
    )
}

export default SignIn