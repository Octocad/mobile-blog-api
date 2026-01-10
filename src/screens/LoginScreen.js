import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { login } from '../services/auth';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const result = await login(email, password);
    if (result.success) {
      // Verifica se o usuário é professor para acessar a área administrativa
      // Aqui você pode ajustar conforme a lógica do seu backend
      // Vamos assumir que o objeto user tem uma propriedade 'role'
      if (result.user.role === 'teacher') {
        navigation.navigate('Admin');
      } else {
        navigation.navigate('Home');
      }
    } else {
      Alert.alert('Erro', result.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blog Acadêmico</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
});

export default LoginScreen;