import api from './api';

export const getTeachers = (page = 1) => api.get(`/teachers?page=${page}`);
export const getTeacher = (id) => api.get(`/teachers/${id}`);
export const createTeacher = (teacher) => api.post('/teachers', teacher);
export const updateTeacher = (id, teacher) => api.put(`/teachers/${id}`, teacher);
export const deleteTeacher = (id) => api.delete(`/teachers/${id}`);