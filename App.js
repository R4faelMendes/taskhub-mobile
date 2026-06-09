import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import CadastroScreen from "./src/screens/CadastroScreen";
import HomeScreen from "./src/screens/HomeScreen";
import TarefasDetalheScreen from "./src/screens/TarefasDetalheScreen";
import TarefaScreen from "./src/screens/TarefaScreen";
import PostScreen from "./src/screens/PostScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "login" }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: "cadastro" }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "home" }} />
        <Stack.Screen name="TarefasDetalhe" component={TarefasDetalheScreen} options={{ title: "detalhes da tarefa" }} />
        <Stack.Screen name="Tarefa" component={TarefaScreen} options={{ title: "tarefa" }} />
        <Stack.Screen name="Post" component={PostScreen} options={{ title: "post" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}   

