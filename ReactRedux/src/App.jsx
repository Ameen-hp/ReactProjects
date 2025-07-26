import { useState } from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import React from 'react'
import "./App.css"
function App() {
  
  return (
    <>
      <div className=''>
        <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
      </div>
    </>
  )
}

export default App