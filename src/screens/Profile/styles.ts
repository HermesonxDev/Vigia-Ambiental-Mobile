import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50
    },
    form: {
        width: '90%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 50,
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
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 5
    }
})