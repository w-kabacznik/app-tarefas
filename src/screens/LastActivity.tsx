import { View, Text } from 'react-native';
import Header from '../components/Header';
import { emptyStyles } from '../styles/emptyStyles';
import { todaysTaskStyles } from '../styles/todaysTaskStyles';
import EmptyList from '../components/EmptyList';

export default function LastActivity() {
    return (
        <View style={ todaysTaskStyles.container }>
            <Header title="Últimas Atividades" />

            <EmptyList title="Nao há atividades recentes na aplicação"/>
        </View>
    );
}