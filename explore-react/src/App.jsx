import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
      
    </>
  )
}
function Person(){
  const age = 22;
  const money = 20;
  const person = {name: 'abir', age: 22}
  return <h2>I am {person.name} Hossen. I am {age} years old. I have ${money} Tk.</h2>
}

function Student(){
  return (
    <div>
      <h3>Name: </h3>
      <h3>Age: </h3>
    </div>
  )
}

export default App
