// App.js
import React from 'react';
//import Login from './pages/Login';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import HistoricalPrices from './pages/HistoricalPrices';


const App = () => {
  // // State for login credentials
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // // Function to handle login
  // const handleLogin = () => {
  //   // Perform your login logic here, e.g., send credentials to the server
  //   console.log(`Logging in with username: ${username} and password: ${password}`);
  //   // Add your login logic or API call here
  // };

  return (
    <div>
            {/* <Login
        username={username}
        password={password}
        onUsernameChange={(e) => setUsername(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onLogin={handleLogin}
      /> */}
      <HistoricalPrices/>
    </div>
  );
};

export default App;
