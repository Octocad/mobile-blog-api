import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { createPost } from '../services/posts';
import Input from '../components/Input';
import Button from '../components/Button';

const CreatePostScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async () => {
    if (!title || !content || !author) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
    try {
      await createPost({ title, content, author });
      Alert.alert('Sucesso', 'Post criado com sucesso');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível criar o post');
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Título" value={title} onChangeText={setTitle} />
      <Input placeholder="Conteúdo" value={content} onChangeText={setContent} multiline />
      <Input placeholder="Autor" value={author} onChangeText={setAuthor} />
      <Button title="Criar Post" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default CreatePostScreen;