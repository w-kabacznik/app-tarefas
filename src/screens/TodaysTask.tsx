import { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, Text, TextInput, Alert } from 'react-native';
import { todaysTaskStyles } from '../styles/todaysTaskStyles';
import { getData, storeData } from '../services/storage';

import Header from '../components/Header';
import TaskCard from '../components/TaskCard';
import EmptyList from '../components/EmptyList';
import Modal from '../components/ModalComponent';

export type Task = {
    id: string;
    nome: string;
    descricao: string;
    status: boolean;
    data: string;
}

export default function TodaysTask() {

    const [modalVisible, setModalVisible] = useState(false);
    const [Search, setSearch] = useState("");

    const [tasks, setTasks] = useState<Task[]>([]);

    const [ filteredTasks, setFilteredTasks ] = useState<Task[]>([]);

    useEffect(() => {

        async function fetchData(): Promise<void> {

            const storageTasks = await getData('@tasks') || [];

            if (storageTasks){
                setTasks(storageTasks);
                setFilteredTasks(storageTasks);
            }
            else {
                Alert.alert("Error!!!","Erro ao buscar dados");
            }
        }

        fetchData();

    } , []);

    useEffect(() => {

        async function filterTasks() {

            const storageTasks = await getData('@tasks') || [];

            if (storageTasks) {
                setTasks(storageTasks);
            }
            else {
                Alert.alert("Error!!!", "Erro ao buscar dados");
            }

            if (Search === "") {
                setFilteredTasks(tasks);
            } else {
                setFilteredTasks(tasks.filter(task => task.nome.toLocaleLowerCase().includes(Search.toLocaleLowerCase())));
            }
        }

        filterTasks();

    }, [Search, tasks]);
    
    function handleAddTask() {
        setModalVisible(true);
    }

    async function handleDelete(id: string) {
            
            const newTasks = tasks.filter(task => task.id !== id);
    
            await storeData('@tasks', newTasks);
    
            setTasks(newTasks);
    }

    return (
        <SafeAreaView style={ todaysTaskStyles.container }>
            
            <Header title="Today's Tasks" handleAddTask={handleAddTask}/>

            <View>
                <Text style={todaysTaskStyles.label}>Pesquisar</Text>
                <TextInput 
                    value={Search}
                    style={todaysTaskStyles.input}
                    placeholder="Pesquisar por...."
                    onChangeText={setSearch}
                />
            </View>

            <FlatList 
                data={filteredTasks}
                keyExtractor={item => item.nome}
                renderItem={({item}) => (
                    <TaskCard task={item} handleDelete={handleDelete}/>
                )}
                ListEmptyComponent={() => <EmptyList title="Nao há tarefas para serem caregadas."/>}
                showsVerticalScrollIndicator={false}
            />

            <Modal 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible}
                tasks={tasks}
                setTasks={setTasks}
            />
        </SafeAreaView>
    );
}