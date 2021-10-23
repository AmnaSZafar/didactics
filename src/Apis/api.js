//getting API for showing all the data
import axios from 'axios';
//export const getTodos = () => fetch("https://didactics.one/").then(res => res.json())

export const getTodos = id => (
	console.log(id),
	axios.post(`https://didactics.one/`)
		.then(res => res.data, )	
)

//getting API for inserting the data
export const createTodo = (todo) => fetch("https://didactics.one/students/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodo = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getTodo = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())
export const getTodo = id => (
	console.log(id),
	axios.post(`https://didactics.one/${id}`)
		.then(res => res.data, )	
)