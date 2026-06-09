import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import api from '../services/api';

export default function CadastroScreen({ navigation }) {
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });

  function handleChange(name, value) {
    setForm({ ...form, [name]: value });
  }

  async function handleRegister() {
    try {
      const response = await api.postUser(form);
      Alert.alert('Sucesso', response.data.message || 'Usuário cadastrado com sucesso.');
      navigation.navigate('Login');
    } catch (error) {
      const msg = error?.response?.data?.message || 'Erro ao cadastrar usuário.';
      Alert.alert('Erro', msg);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={form.nome}
        onChangeText={(v) => handleChange('nome', v)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={form.email}
        onChangeText={(v) => handleChange('email', v)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={form.senha}
        onChangeText={(v) => handleChange('senha', v)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já tem conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#f5f5f5' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 32, color: '#1a1a2e' },
  input: { width: '100%', height: 48, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 12, marginBottom: 16, backgroundColor: '#fff' },
  button: { width: '100%', height: 48, backgroundColor: '#4f46e5', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  link: { color: '#4f46e5', marginTop: 8 },
});
