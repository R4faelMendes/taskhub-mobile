import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import api from "../services/api";

export default function LoginScreen({ navigation }) {
  const [form, setForm] = useState({ email: "", senha: "" });

  function handleChange(name, value) {
    setForm({ ...form, [name]: value });
  }

  async function handleLogin() {
    try {
      const response = await api.postLogin(form);
      await SecureStore.setItemAsync("token", response.data.token);
      Alert.alert("Sucesso", response.data.message);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Erro", "E-mail ou senha inválidos.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskHub</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={form.email}
        onChangeText={(v) => handleChange("email", v)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={form.senha}
        onChangeText={(v) => handleChange("senha", v)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24, backgroundColor: "#f5f5f5" },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 32, color: "#1a1a2e" },
  input: { width: "100%", height: 48, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 12, marginBottom: 16, backgroundColor: "#fff" },
  button: { width: "100%", height: 48, backgroundColor: "#4f46e5", borderRadius: 8, justifyContent: "center", alignItems: "center", marginBottom: 12 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  link: { color: "#4f46e5", marginTop: 8 },
});