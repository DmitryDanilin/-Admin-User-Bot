import axios from 'axios';

const API_URL = '/api/users';

export const fetchUsers = async (searchTerm) => {
  const response = await axios.get(`${API_URL}?searchTerm=${searchTerm}`);
  return response.data;
};