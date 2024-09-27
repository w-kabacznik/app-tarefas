import { View, Text } from 'react-native';
import { todaysTaskStyles } from '../styles/todaysTaskStyles';
import Header from '../components/Header';
import EmptyList from '../components/EmptyList';

export default function Messages() {
    return (
        <View style={ todaysTaskStyles.container }>
            <Header title="Mensagens" />

            <EmptyList title="Nao há mensagens para serem lidas."/>
        </View>
    );
}