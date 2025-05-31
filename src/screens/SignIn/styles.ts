import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C8E6C9',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50
    },
    form: {
        backgroundColor: '#66BB6A',
        width: '80%',
        height: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 5,
        padding: 15
    },
    fields: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },
    label: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 5
    }
})