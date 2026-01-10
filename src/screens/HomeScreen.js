import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { getPosts, searchPosts } from '../services/posts';
import Card from '../components/Card';

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const response = await getPosts();
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    if (search.trim() === '') {
      loadPosts();
      return;
    }
    try {
      const response = await searchPosts(search);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderPost = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('PostDetail', { postId: item.id })}>
      <Card>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postAuthor}>Autor: {item.author?.name}</Text>
        <Text style={styles.postDescription} numberOfLines={2}>{item.content}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Buscar posts..."
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postAuthor: {
    color: '#666',
    marginVertical: 5,
  },
  postDescription: {
    color: '#444',
  },
});

export default HomeScreen;