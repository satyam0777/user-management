
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');

    // Fetch users from the backend
    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data); // Update state with fetched users
    };

    // Add a new user
    const addUser = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (!name) return; // Don't submit if the name is empty

        const response = await axios.post('http://localhost:5000/users', { name });
        setUsers([...users, response.data]); // Update state with the new user
        setName(''); // Clear the input field
    };

    // Fetch users when the component mounts
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>User Management</h1>
            <form onSubmit={addUser}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter user name" 
                />
                <button type="submit">Add User</button>
            </form>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;

