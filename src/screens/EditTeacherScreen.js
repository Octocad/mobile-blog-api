import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { getTeacher, updateTeacher } from '../services/teachers';
import Input from '../components/Input';
import Button from '../components/Button';

const EditTeacherScreen = ({ route, navigation }) => {
  const { teacherId } = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    loadTeacher();
  }, []);

  const loadTeacher = async () => {
    try {
      const response = await getTeacher(teacherId);
      const teacher = response.data;
      setName(teacher.name);
      setEmail(teacher.email);
      // Não carregamos a senha por motivos de segurança
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
    const data = { name, email };
    if (password) {
      data.password = password;
    }
    try {
      await updateTeacher(teacherId, data);
      Alert.alert('Sucesso', 'Professor atualizado com sucesso');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o professor');
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Nome" value={name} onChangeText={setName} />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Nova Senha (opcional)" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Atualizar Professor" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default EditTeacherScreen;