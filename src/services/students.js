import api from './api';

export const getStudents = (page = 1) => api.get(`/students?page=${page}`);
export const getStudent = (id) => api.get(`/students/${id}`);
export const createStudent = (student) => api.post('/students', student);
export const updateStudent = (id, student) => api.put(`/students/${id}`, student);
export const deleteStudent = (id) => api.delete(`/students/${id}`);