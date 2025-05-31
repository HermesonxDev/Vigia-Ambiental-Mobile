import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

const Input: React.FC<TextInputProps> = ({ ...rest }) => (
    <TextInput style={styles.container} {...rest} />
)

export default Input