import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const actor = ['sakib', 'raj', 'jasim', 'Rubel', 'salman Shah'];
  const singers = [
    {id: 1, name: 'Mahafujur Rahman', age: 66},
    {id: 2, name: 'Asif rahman', age: 46},
    {id: 3, name: 'Atif Aslam', age: 40},
    {id: 4, name: 'AR Rahman', age: 36}
  ]

  return (
    <>
      
      <h1>Vite + React</h1>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Bappa Raz"}></Actor>
      {
        actor.map(actor =><Actor name={actor}></Actor>)
      }

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore React" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}

      {/* <Device name="Laptop" Price="55"></Device>
      <Device name="Mobile" Price="15"></Device>
      <Device name="Mobile" Price="5"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="9" score="89"></Student>
      <Student></Student>
      <Devloper></Devloper> */}
      
    </>
  )
}

function Device(props){
  // console.log(props);
  
  return <h2>Laptop: {props.name} Price: {props.Price} </h2>
}

function Person(){
  const age = 22;
  const money = 20;
  const person = {name: 'abir', age: 22}
  return <h2>I am {person.name} Hossen. I am {age} years old. I have ${money} Tk.</h2>
}

const {grade, score} = {grade: '7', score: '99'};
function Student({grade=1, score=0}){
  console.log(grade, score);
  
  return (
    <div className='student'>
      <h3>Grade: {grade} </h3>
      <h3>Score: {score} </h3>
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
