import { Text, View } from "react-native"
import { styles } from "./styles"
import Title from "../../components/Title"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useGlobal } from "../../hooks/Global"
import Loading from "../../components/Loading"
import { AuthForm } from "../../utils/interfaces"
import { useEffect, useState } from "react"

const Profile: React.FC = () => {

    const { loading, user, updateUser } = useGlobal()

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

    useEffect(() => {
        if (user) {
            setFormState({
                name: user?.name || '',
                email: user?.email || '',
                password: user?.password || ''
            })
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Title>Perfil</Title>

                <View style={styles.fields}>
                    <View style={styles.field}>
                        <Text style={styles.label}>Nome</Text>
                        <Input
                            value={formState.name}
                            onChangeText={(text) => handleChangeForm(text, 'name')}
                            placeholder="Digite seu Nome"
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Email</Text>
                        <Input
                            value={formState.email}
                            onChangeText={(text) => handleChangeForm(text, 'email')}
                            placeholder="Digite seu Email"
                        />
                    </View>
                    
                    <View style={styles.field}>
                        <Text style={styles.label}>Senha</Text>
                        <Input
                            value={formState.password}
                            onChangeText={(text) => handleChangeForm(text, 'password')}
                            placeholder="Digite sua Senha"
                            secureTextEntry
                        />
                    </View>
                </View>

                {!loading
                    ? <Button
                        activeOpacity={0.9}
                        onPress={() => updateUser(user?.id, formState)}
                      >Salvar</Button>
                    : <Loading />
                }
            </View>
        </View>
    )
}

export default Profile