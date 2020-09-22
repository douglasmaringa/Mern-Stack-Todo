import React, { useState } from 'react'

const CreateTodo = (props) => {
  const [name, setName] = useState('')
  const [post, setPost] = useState('')
  

  const onChangename = (e) => {
    setName(e.target.value)
  }

  const onChangepost = (e) => {
    setPost(e.target.value)
  }

  

  const postNewTodo = async (data) => {
    const response = await fetch('https://lastrestapi.herokuapp.com/add', {
      method: 'POST',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
      body: JSON.stringify(data)
    })
    const json = await response.json()
    console.log(json)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(`Form submitted:`);
    // console.log(`Todo Description: ${todoDescription}`);
    // console.log(`Todo Responsible: ${todoResponsible}`);
    // console.log(`Todo Priority: ${todoPriority}`);

    const newTodo = {
      name: name,
      post: post,
     
    }

    postNewTodo(newTodo)



    setName('')
    setPost('')
    
  }
  return (
    <div style={{marginTop: 10}}>
        <h3>Create New Todo</h3>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>NAME: </label>
                <input  type="text"
                        className="form-control"
                        value={name}
                        onChange={onChangename}
                        />
            </div>
            <div className="form-group">
                <label>POST: </label>
                <input
                        type="text"
                        className="form-control"
                        value={post}
                        onChange={onChangepost}
                        />
            </div>
           
             

            <div className="form-group">
                <input type="submit" value="Create Todo" className="btn btn-primary" />
            </div>
        </form>
    </div>
  )
}

export default CreateTodo
