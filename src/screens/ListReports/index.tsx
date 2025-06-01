import { Text, View } from "react-native"
import { styles } from "./styles"
import { useGlobal } from "../../hooks/Global"
import Title from "../../components/Title"

const ListReports: React.FC = () => {

    const { user, reports } = useGlobal()
    
    const myReports = reports.filter(report => report.id === user?.id)

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Title>Acomp. Denuncias</Title>

                <View style={styles.gridContainer}>
                    <View style={styles.gridHeaderRow}>
                        <Text style={styles.gridHeaderItem}>N. Denuncia</Text>
                        <Text style={styles.gridHeaderItem}>Endereço</Text>
                        <Text style={styles.gridHeaderItem}>Status</Text>
                    </View>

                    {myReports.map((report, index) => (
                        <View key={report.id} style={styles.gridBodyRow}>
                            <Text style={styles.gridBodyItem}>
                                {(index + 1).toString().padStart(3, '0')}
                            </Text>
                            <Text style={styles.gridBodyItem} numberOfLines={1}>
                                {`${report.street}, ${report.number} - ${report.neighborhood}`}
                            </Text>
                            <Text style={styles.gridBodyItem}>
                                Em Análise
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default ListReports