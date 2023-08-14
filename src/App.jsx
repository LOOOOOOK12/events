import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [result, setResult] = useState('Result');

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(`${firstName} ${lastName}`);
  };

  return (
    <>
      <h1 id="result">{result}</h1>
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="fname"
            placeholder="Enter first name:"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="lname"
            placeholder="Enter last name:"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Submit Form
        </button>
      </form>
    </>
  );
}

export default App
