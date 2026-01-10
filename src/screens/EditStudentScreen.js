import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { getStudent, updateStudent } from '../services/students';
import Input from '../components/Input';
import Button from '../components/Button';

const EditStudentScreen = ({ route, navigation }) => {
  const { studentId } = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const response = await getStudent(studentId);
      const student = response.data;
      setName(student.name);
      setEmail(student.email);
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
      await updateStudent(studentId, data);
      Alert.alert('Sucesso', 'Estudante atualizado com sucesso');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o estudante');
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Nome" value={name} onChangeText={setName} />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Nova Senha (opcional)" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Atualizar Estudante" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default EditStudentScreen;