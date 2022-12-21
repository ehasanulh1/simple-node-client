import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };
    console.log(user);
  }

  return (
    <div className="App">
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' />
        <br />
        <input type="text" name='email' id='' />
        <br />
        <button type='submit'>Add User</button>
      </form>
      <h2>USers: {users.length}</h2>
      <div>
        {
          users.map(user => <p key={user.id}>{user.name} {user.email} </p>)
        }
      </div>
    </div>
  );
}

export default App;