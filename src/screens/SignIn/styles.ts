import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#white',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50
    },
    form: {
        backgroundColor: '#ccc',
        width: '80%',
        height: '42%',
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
    registerText: {
        alignSelf: 'flex-end',
        color: 'black',
        fontWeight: 'bold'
    },
    link: {
        color: 'blue'
    },
    label: {
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 5
    }
})