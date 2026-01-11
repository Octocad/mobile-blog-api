import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MOCK_AUTH = true;

export const login = async (email, password) => {
  if (MOCK_AUTH) {
    await new Promise((res) => setTimeout(res, 300));
    const role = (email || '').toLowerCase().includes('teacher') || (email || '').toLowerCase().includes('prof') ? 'teacher' : 'student';
    const user = {
      id: 1,
      name: 'Usuário Mock',
      email,
      role,
    };
    const token = 'mock-token';
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user', JSON.stringify(user));
    return { success: true, user };
  }

  try {
    const response = await api.post('/auth/login', { email, password });
    const { token, user } = response.data;
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user', JSON.stringify(user));
    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.response?.data?.message || 'Erro ao fazer login' };
  }
};

export const logout = async () => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('user');
};

export const getCurrentUser = async () => {
  const user = await AsyncStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};