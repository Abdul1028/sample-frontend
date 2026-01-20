import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.log('API call failed, using mock data instead:', error.message);
        // Use mock data if API fails
        const mockUsers = [
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: { name: "Romaguera-Crona" },
            address: { city: "Gwenborough" }
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
            phone: "010-692-6593 x09125",
            website: "anastasia.net",
            company: { name: "Deckow-Crist" },
            address: { city: "Wisokyburgh" }
          },
          {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
            phone: "1-463-123-4447",
            website: "ramiro.info",
            company: { name: "Romaguera-Jacobson" },
            address: { city: "McKenziehaven" }
          },
          {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org",
            phone: "493-170-9623 x156",
            website: "kale.biz",
            company: { name: "Robel-Corkery" },
            address: { city: "South Elvis" }
          }
        ];
        setUsers(mockUsers);
        setError('Using demo data (API unavailable)');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="App"><div className="container"><h1>Loading...</h1></div></div>;
  }

  return (
    <div className="App">
      <div className="container">
        <h1>React API Demo - User List</h1>
        <p className="subtitle">
          {error ? error : 'Fetching data from JSONPlaceholder API'}
        </p>
        <div className="users-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <h2>{user.name}</h2>
              <div className="user-info">
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
                <p><strong>City:</strong> {user.address.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
