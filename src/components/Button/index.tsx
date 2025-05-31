import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

const Button: React.FC<TouchableOpacityProps> = ({ children, ...rest }) => (
    <TouchableOpacity style={styles.container} { ...rest } >
        <Text style={styles.title}>{ children }</Text>
    </TouchableOpacity>
)

export default Button