import { StyleSheet } from 'react-native';

export const todaysTaskStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        marginVertical: 8,
        backgroundColor: '#fff',
    },
});