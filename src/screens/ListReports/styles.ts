import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50
    },
    box: {
        width: '95%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 50,
    },
    gridContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    gridHeaderRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ccc',
        borderRadius: 2,
        padding: 10,
    },
    gridHeaderItem: {
        fontWeight: 'bold'
    },
    gridBodyRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#666',
        borderRadius: 2,
        padding: 10,
    },
    gridBodyItem: {
        fontWeight: 'bold',
        color: 'white'
    }
})