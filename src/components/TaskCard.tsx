import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Task } from '../screens/TodaysTask';
import { Feather } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { taskStyles } from '../styles/taskStyles';

type TaskProps = {  
    task: Task; 
    handleDelete: (id: string) => void;
}

export default function TaskCard({ task, handleDelete }: TaskProps) {

    const [isChecked, setIsChecked] = useState(false);

    function handleCheck() {
        setIsChecked(!isChecked);
    }
    
    return (
        <View style={ taskStyles.container } >
            <View style={ taskStyles.areaTaskTitle }>
                <View>
                    <Text 
                    style={ isChecked ? taskStyles.titleMarked : taskStyles.title }>
                        {task.nome}
                    </Text>
                    <Text style={ taskStyles.description }>
                        {task.descricao}
                    </Text>
                </View>

                <View>
                    <BouncyCheckbox
                        size={30}
                        fillColor="#043D9C"
                        unFillColor="#FFFFFF"
                        iconStyle={{ borderColor: "#043D9C" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        onPress={() => handleCheck()}
                    />
                </View>
            </View>

            <View style={ taskStyles.areaDetails}>
                <View style={ taskStyles.areaDataDetails }>
                    <View>
                        <Text style={ taskStyles.dayDetails }>
                            {task.data}
                        </Text>
                    </View>
                   
                    <Text style={ taskStyles.hourDetails }>
                        10:00 AM - 11:00 AM
                    </Text>
                </View>
                <TouchableOpacity 
                style= { taskStyles.trashButton }
                 onPress={() => handleDelete(task.id)}
                >
                    <Feather name="trash" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );
}