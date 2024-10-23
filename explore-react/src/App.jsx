import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Device name="Laptop" Price="55"></Device>
      <Device name="Mobile" Price="15"></Device>
      <Device name="Mobile" Price="5"></Device>
      <Person></Person>
      <Student></Student>
      <Devloper></Devloper>
      
    </>
  )
}

function Device(props){
  console.log(props);
  
  return <h2>Laptop: {props.name} Price: {props.Price} </h2>
}

function Person(){
  const age = 22;
  const money = 20;
  const person = {name: 'abir', age: 22}
  return <h2>I am {person.name} Hossen. I am {age} years old. I have ${money} Tk.</h2>
}

function Student(){
  return (
    <div className='student'>
      <h3>Name: </h3>
      <h3>Age: </h3>
    </div>
  )
}

function Devloper(){
  const devloperStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={devloperStyle}>
      <h3>Devloper</h3>
      <p>Coding: </p>
    </div>
  )
}

export default App
