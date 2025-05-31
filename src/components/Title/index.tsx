import { Text } from "react-native"
import { styles } from "./styles"

const Title: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
    <Text style={styles.container}>{ children }</Text>
)

export default Title