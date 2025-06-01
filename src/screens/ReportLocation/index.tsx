import { Text, View } from "react-native"
import { styles } from "./styles"
import { useState } from "react"
import { ReportForm } from "../../utils/interfaces"
import { useGlobal } from "../../hooks/Global"
import Title from "../../components/Title"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Loading from "../../components/Loading"

const ReportLocation: React.FC = () => {

    const { loading, user } = useGlobal()

    const [formState, setFormState] = useState<ReportForm>({
        reportingUserId: user?.id,
        street: '',
        number: '',
        neighborhood: '',
        referencePoint: '',
        description: ''
    })

    const handleChangeForm = (value: string, key: keyof ReportForm) => {
        setFormState((prev) => ({
            ...prev,
            [key]: value
        }))
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
                </View>

                {!loading
                    ? <Button
                        activeOpacity={0.9}
                        onPress={() => {}}
                      >Denunciar</Button>
                    : <Loading />
                }
            </View>
        </View>
    )
}

export default ReportLocation