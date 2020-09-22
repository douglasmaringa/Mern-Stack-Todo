import React, { useState, useEffect} from 'react'
import '../index.css'


const TodosList = (props) => {
  const [todos, setTodos] = useState([])
  const count = 0

  const Todo = props => (
      <tr>
          <td >{props.todo.name}</td>
          <td >{props.todo.post}</td>
          
      </tr>
  )

  const fetchItems = async () => {
    const response = await fetch('https://lastrestapi.herokuapp.com/')
    const json = await response.json()
    setTodos(json)
  }

  useEffect(() => {
    fetchItems()

  }, [count])

  const todoList = () => {
    return todos.map((currentTodo, i) => {
      return <Todo todo={currentTodo} key={i} />
    })
  }

  
  return (
    <div>
      <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }} >
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>POST</th>
                    
                </tr>
            </thead>
            <tbody>
                { todoList() }
            </tbody>
        </table>
    </div>
  )
}

export default TodosList
