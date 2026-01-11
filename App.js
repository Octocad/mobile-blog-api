import React from 'react';
import { StyleSheet } from 'react-native';
import './src/services/api';
import './src/config/reactotronConfig';
import './src/config/axiosConfig';
import './src/config/navigationConfig';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({});