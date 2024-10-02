import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
