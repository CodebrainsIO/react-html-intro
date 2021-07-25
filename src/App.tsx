import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import { Header } from './Header';

function App() {
  const [age, setAge] = useState(0);
  const [greeting, setGreeting] = useState("");
  const [users, setUsers] = useState(["James", "Jim", "Jeff", "John"]);
  const [student, setStudent] = useState({
    name: "James",
    age: 28,
    grade: "Freshman",
    courses: ["Math", "History", "Science"]
  });
  
  const personGreeting = (personName: string, personAge: number) => {
    setAge(personAge);
    /*if(age >= 18){
      setGreeting(`Hello ${personName}, I see that you are ${age} years old!`);
    } else {
      setGreeting(`Hello ${personName}, I see that you are aren't old enough`);
    }*/

    switch (personName) {
      case "James":
        setGreeting(`${personName} you are the owner of Codebrains`);
        break;
      case "Bob":
        setGreeting(`You are a supervisor`);
        break;
      default:
        setGreeting(`You are a student`);
    }
    
  }
  
  const alertAge = () => {
    alert(age);
  }
  //
  useEffect(() => {
    personGreeting("James", 28);
  }, [age, greeting]);
  return (
    <div>
      <Header />
      <p>{greeting}</p>
      <button onClick={alertAge}>What is the age</button>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Example table</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>C#</td>
            <td>ASP.NET Core</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>Spring</td>
          </tr>
          <tr>
            <td>Javascript</td>
            <td>Express</td>
          </tr>
        </tbody>
      </table>
      <ul>
        {users.map((user) =>
          <li>{user}</li>
        )}
      </ul>
      <h1>Student</h1>
      <Profile student={student}/>
    </div>
  );
}

export default App;
