//getting API for showing all the data
import axios from 'axios';
//export const getTodos = () => fetch("http://localhost:3001/").then(res => res.json())

export const getTodos = id => (
	console.log(id),
	axios.post(`http://localhost:3001/`)
		.then(res => res.data, )	
)

//getting API for inserting the data
export const createTodo = (todo) => fetch("http://localhost:3001/students/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodo = (todo, id) => fetch(`http://localhost:3001/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getTodo = (id) => fetch(`http://localhost:3001/${id}`).then(res => res.json())
export const getTodo = id => (
	console.log(id),
	axios.post(`http://localhost:3001/${id}`)
		.then(res => res.data, )	
)