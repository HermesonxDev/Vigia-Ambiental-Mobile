import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { useEffect, useState } from "react"
import { ReportForm } from "../../utils/interfaces"
import { useGlobal } from "../../hooks/Global"
import Title from "../../components/Title"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Loading from "../../components/Loading"
import { launchImageLibrary } from "react-native-image-picker"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { AppTabAndDrawerRoutes } from "../../utils/types"

const ReportLocation: React.FC = () => {

    const { loading, user, addReport } = useGlobal()

    const navigation = useNavigation<NavigationProp<AppTabAndDrawerRoutes>>()

    const [formState, setFormState] = useState<ReportForm>({
        reportingUserId: user?.id,
        street: '',
        number: '',
        neighborhood: '',
        referencePoint: '',
        description: ''
    })

    const [image, setImage] = useState<String | null | undefined>(null)

    const handleChangeForm = (value: string, key: keyof ReportForm) => {
        setFormState((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    useEffect(() => {
        setFormState({
            reportingUserId: user?.id,
            street: '',
            number: '',
            neighborhood: '',
            referencePoint: '',
            description: ''
        })
    }, [loading])

    const handleSelectImage = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1 },
            (response) => {
                if (response.didCancel) {
                    console.log('Usuário cancelou');
                } else if (response.errorCode) {
                    console.error('Erro:', response.errorMessage);
                } else if (response.assets && response.assets.length > 0) {
                    setImage(response.assets[0].uri);
                }
            }
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Title>Denunciar Local</Title>

                <View style={styles.fields}>
                    <View style={styles.field}>
                        <Text style={styles.label}>Rua</Text>
                        <Input
                            value={formState.street}
                            placeholder="Digite a Rua"
                            onChangeText={(text) => handleChangeForm(text, 'street')}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Número</Text>
                        <Input
                            value={formState.number}
                            placeholder="Digite o Número"
                            onChangeText={(text) => handleChangeForm(text, 'number')}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Bairro</Text>
                        <Input
                            value={formState.neighborhood}
                            placeholder="Digite o Bairro"
                            onChangeText={(text) => handleChangeForm(text, 'neighborhood')}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Ponto de Referência</Text>
                        <Input
                            value={formState.referencePoint}
                            placeholder="Digite o Ponto de Referência"
                            onChangeText={(text) => handleChangeForm(text, 'referencePoint')}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Descrição</Text>
                        <Input
                            value={formState.description}
                            placeholder="Digite a Descrição"
                            onChangeText={(text) => handleChangeForm(text, 'description')}
                        />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Imagem do Local</Text>
                        <TouchableOpacity
                            style={styles.imageButton}
                            activeOpacity={0.9}
                            onPress={handleSelectImage}
                        >
                            <Text style={styles.imageButtonText}>Selecionar imagem</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {!loading
                    ? <Button
                        activeOpacity={0.9}
                        onPress={() => addReport(formState, navigation.navigate)}
                      >Denunciar</Button>
                    : <Loading />
                }
            </View>
        </View>
    )
}

export default ReportLocation