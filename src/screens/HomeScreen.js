import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function HomeScreen({ navigation }) {
  
  async function handleLogout() {
    await SecureStore.deleteItemAsync("token");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao TaskHub!</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Tarefas")}>
        <Text style={styles.buttonText}>Ver Tarefas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Usuarios")}>
        <Text style={styles.buttonText}>Ver Usuários</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Posts")}>
        <Text style={styles.buttonText}>Ver Posts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logout]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 30 },
  button: { width: "100%", padding: 15, backgroundColor: "#4f46e5", borderRadius: 8, marginBottom: 10, alignItems: "center" },
  logout: { backgroundColor: "#e11d48", marginTop: 20 },
  buttonText: { color: "#fff", fontWeight: "bold" }
});
