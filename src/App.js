import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [order, setOrder] = useState('avocado');
    const [price, setPrice] = useState(0);

  useEffect(() => {
      fetch('/hi', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({'order': order})
      }).then(res => res.json())
          .then(data => setPrice(data.price));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <h1>Welcome to the grocery store.</h1>

          <p> The price of {order} is ${price}</p>
      </header>
    </div>
  );
}

export default App;
