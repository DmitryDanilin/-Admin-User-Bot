import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import { fetchUsers } from './services/api';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      if (searchTerm) {
        const result = await fetchUsers(searchTerm);
        setUsers(result.result);
      } else {
        setUsers([]);
      }
    };

    getUsers();
  }, [searchTerm]);

  return (
    <AppContainer>
      <h1>Bot User Search</h1>
      <SearchBar onSearch={setSearchTerm} />
      <UserList users={users} />
    </AppContainer>
  );
};

export default App;
