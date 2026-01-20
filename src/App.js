import React, { useState, useEffect } from 'react';

// Mock data as fallback if API is unavailable
const mockUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne@example.com",
    phone: "1-770-736-8031",
    website: "hildegard.org",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874"
    },
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin@example.com",
    phone: "010-692-6593",
    website: "anastasia.net",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771"
    },
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency"
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "clementine@example.com",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157"
    },
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface"
    }
  }
];

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingMockData, setUsingMockData] = useState(false);

  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('API fetch failed, using mock data:', err.message);
        // Use mock data as fallback
        setUsers(mockUsers);
        setUsingMockData(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Simple React App with API</h1>
        <p>Fetching user data from JSONPlaceholder API</p>
        {usingMockData && (
          <p className="mock-data-notice">
            ⚠️ Using mock data (API unavailable in this environment)
          </p>
        )}
      </header>
      
      <main className="users-container">
        <h2>Users List</h2>
        <div className="users-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
              <div className="user-address">
                <strong>Address:</strong>
                <p>{user.address?.street}, {user.address?.suite}</p>
                <p>{user.address?.city}, {user.address?.zipcode}</p>
              </div>
              <div className="user-company">
                <strong>Company:</strong>
                <p>{user.company?.name}</p>
                <p className="company-catchphrase">{user.company?.catchPhrase}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
