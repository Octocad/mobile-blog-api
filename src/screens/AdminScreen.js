import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';

const AdminScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button title="Gerenciar Posts" onPress={() => navigation.navigate('Home')} />
    <Button title="Gerenciar Professores" onPress={() => navigation.navigate('TeacherList')} />
    <Button title="Gerenciar Estudantes" onPress={() => navigation.navigate('StudentList')} />
    <Button title="Criar Post" onPress={() => navigation.navigate('CreatePost')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default AdminScreen;