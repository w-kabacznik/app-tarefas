import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { headerStyles } from '../styles/headerStyles';

type HeaderProps = {
    title: string;
    handleAddTask?: () => void;
}

export default function Header({title, handleAddTask}: HeaderProps) {

    return (
        <View style={ headerStyles.container }>
            <View>
                <Text style={ headerStyles.title }>{title}</Text>
                <Text  style={ headerStyles.date }>
                    Segunda, 27 de setembro
                </Text>
            </View>
            
            <TouchableOpacity 
            style={ headerStyles.button }
            onPress={ ()=> handleAddTask && handleAddTask() }
            >
                <Feather name="plus" size={24} color="white"/>

                <Text style={ headerStyles.textButton }>
                    Tarefa
                </Text>
            </TouchableOpacity>
        </View>
    );
}