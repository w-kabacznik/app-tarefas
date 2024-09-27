import React, { useState } from 'react';
import { View, Text, Pressable, Modal, Alert, TextInput } from 'react-native';
import { modalStyles } from '../styles/modalStyles';
import { getData, storeData } from '../services/storage';
import uuid from 'react-native-uuid';
import { Task } from '../screens/TodaysTask';

type ModalComponentProps = {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}

export default function ModalComponent({ modalVisible, setModalVisible, tasks, setTasks }: ModalComponentProps) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleCloseModal(){
        setModalVisible(false);
    }

    async function handleAddTask(){

        const storageTasks = await getData('@tasks') || [];

        if(storageTasks){
            setTasks(storageTasks);
        }
        else {
            Alert.alert('Error!!!', 'Erro ao buscar dados');
            return;
        }

        const newTask = { 
            id: uuid.v4(),
            nome: name,
            descricao: description,
            status: false,
            data: String(new Date().getTime()),
        }

        const newTasks = [...storageTasks, newTask];

        await storeData('@tasks', newTasks);

        Alert.alert('Adicionando tarefa', 'Tarefa adicionada com sucesso');
        setName('');
        setDescription('');
    }

    return (
        <View style={modalStyles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>

                        <View>
                            <Text>Tarefa</Text>
                            <TextInput 
                            value={name}
                            onChangeText={setName}
                            style={modalStyles.input}
                            placeholder="Digite o nome da tarefa ..."
                            />
                        </View>

                        <View>
                            <Text>Descrição</Text>
                            <TextInput 
                            value={description}
                            onChangeText={setDescription}
                            style={modalStyles.input}
                            placeholder="Digite a descrição da tarefa ..."
                            />
                        </View>

                        <Pressable
                        style={[modalStyles.button, modalStyles.buttonAdd]}
                        onPress={() => handleAddTask()}>
                            <Text style={modalStyles.textStyle}>Cadastrar</Text>
                        </Pressable>

                        <Pressable
                        style={[modalStyles.button, modalStyles.buttonClose]}
                        onPress={() => handleCloseModal()}>
                            <Text style={modalStyles.textStyle}>Sair</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}