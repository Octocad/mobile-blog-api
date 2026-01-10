import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import EditPostScreen from '../screens/EditPostScreen';
import TeacherListScreen from '../screens/TeacherListScreen';
import CreateTeacherScreen from '../screens/CreateTeacherScreen';
import EditTeacherScreen from '../screens/EditTeacherScreen';
import StudentListScreen from '../screens/StudentListScreen';
import CreateStudentScreen from '../screens/CreateStudentScreen';
import EditStudentScreen from '../screens/EditStudentScreen';
import AdminScreen from '../screens/AdminScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      <Stack.Screen name="EditPost" component={EditPostScreen} />
      <Stack.Screen name="TeacherList" component={TeacherListScreen} />
      <Stack.Screen name="CreateTeacher" component={CreateTeacherScreen} />
      <Stack.Screen name="EditTeacher" component={EditTeacherScreen} />
      <Stack.Screen name="StudentList" component={StudentListScreen} />
      <Stack.Screen name="CreateStudent" component={CreateStudentScreen} />
      <Stack.Screen name="EditStudent" component={EditStudentScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;