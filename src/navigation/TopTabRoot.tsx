import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TodaysTask from "../screens/TodaysTask";
import Messages from "../screens/Messages";
import LastActivity from "../screens/LastActivity";

const topTab = createMaterialTopTabNavigator();

export default function TopTabRoot() {
    return (
        <topTab.Navigator
            initialRouteName="Tarefas do dia"
        >
            <topTab.Screen name="Mensagens" component={Messages} />
            <topTab.Screen name="Tarefas do dia" component={TodaysTask} />
            <topTab.Screen name="Ultimas Atividades" component={LastActivity} />
        </topTab.Navigator>
    );
}