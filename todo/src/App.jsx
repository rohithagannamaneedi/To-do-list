import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos] = useState([
    {
      description:"Learn react",
      status:true
    }
  ])

  const[todoDescription,setTodoDescription] = useState("");

  function handleInput(e){
    setTodoDescription({
      description:e.target.value,
      status:false
    });
  }

  function createTodo(){
    const tempTodoList = [...todos];
    tempTodoList.unshift(todoDescription);
    setTodos(tempTodoList);
  }
  return (
    <>
      <div>
        <input type="text" onChange={handleInput} placeholder='Write your Todo'/>
        <button onClick={createTodo}>Add todo</button>
      </div>
      <div>
        <h1>To-Do-List</h1>
        {
          todos.map((ele)=>{
            return <div>
              <span>Description: {ele.description}</span>
              <span>Status: {ele.status?"Done":"Pending"}</span>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App