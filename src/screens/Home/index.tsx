import { Text, View } from "react-native"
import { styles } from "./styles"

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seja Bem-vindo!</Text>
        </View>
    )
}

export default Home