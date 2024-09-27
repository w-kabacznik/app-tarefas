import { View, Text } from 'react-native'; 
import { emptyStyles } from '../styles/emptyStyles'; 

type EmptyListProps = {
    title: string;
}

export default function EmptyList({title}: EmptyListProps) {
    return (
        <View style={ emptyStyles.container }>
            <Text style={ emptyStyles.text }>{title}</Text>
        </View>
    );
}