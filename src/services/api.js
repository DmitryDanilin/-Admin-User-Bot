import axios from 'axios';

const USERS_FILE = '/users.txt';

export const fetchUsers = async (searchTerm) => {
  try {
    const response = await axios.get(USERS_FILE);
    const users = response.data;
    return {
      result: users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())),
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};