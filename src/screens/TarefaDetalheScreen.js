import { View, Text, ActivityIndicator, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TarefaDetalheScreen({ route, navigation }) {
  const { id } = route.params; r
  const [tarefa, setTarefa] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        setTarefa(res.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" color="#4f46e5" />;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ID: {tarefa.id}</Text>
      <Text style={styles.text}>Título: {tarefa.title}</Text>
      <Text style={styles.text}>Status: {tarefa.completed ? "Concluída ✅" : "Pendente ⏳"}</Text>
      <Text style={styles.text}>Usuário Responsável: {tarefa.userId}</Text>
      
      <View style={{ marginTop: 20 }}>
        <Button title="Voltar para tarefas" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  text: { fontSize: 18, marginBottom: 10 }
});