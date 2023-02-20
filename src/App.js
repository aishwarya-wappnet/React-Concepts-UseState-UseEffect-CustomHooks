import './App.css';
import Time from './Time';
import './index.css';
import State from './State';
import Clock from './Clock';
import Events from './Events';
import Form from './Form';

// const studentData = [
//   { id: 1, name: "Aishwarya", degree: "BE"},
//   { id: 2, name: "Jignesh", degree: "BE"},
//   { id: 3, name: "Dipak", degree: "BE"}
// ]

// const newData = studentData.map( (value) => {
//   return `My name is ${value.name}`;
// })

// console.log(newData);

// console.log(studentData);

function App() {
  return (
    <div className="App">
      <Time />
      <State />
      <Clock />
      <Events />
      <Form />
    </div>
  );
}

export default App;
