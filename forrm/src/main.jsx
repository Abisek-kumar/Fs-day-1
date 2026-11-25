
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'

function MyForm() {

  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [age, setAge] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDept(e) {
    setDept(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Name: " + name);
    alert("Department: " + dept);
    alert("Age: " + age);
  }

  return (
    <form onSubmit={handleSubmit}>

      <label>Enter your name:</label>
      <input
        type="text"
        value={name}
        onChange={handleName}
      />

      <br /><br />

      <label>Enter your department:</label>
      <input
        type="text"
        value={dept}
        onChange={handleDept}
      />

      <br /><br />

      <label>Enter your age:</label>
      <input
        type="number"
        value={age}
        onChange={handleAge}
      />

      <br /><br />

      <input type="submit" value="Submit" />

    </form>
  );
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
