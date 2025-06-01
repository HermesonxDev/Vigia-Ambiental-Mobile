import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22
    },
    confirm: {
        backgroundColor: '#66BB6A',
        padding: 10,
        borderRadius: 5
    },
    cancel: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5
    },
})