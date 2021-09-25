//getting API for showing all the data
import axios from 'axios';
//export const getEmails = () => fetch("http://localhost:3001/emails").then(res => res.json())
export const getEmails = id => (
	console.log(id),
	axios.post(`http://localhost:3001/emails`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createEmails = (todo) => fetch("http://localhost:3001/contacts/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodoForTeacher = (todo, id) => fetch(`http://localhost:3001/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getEmail = id => (
	console.log(id),
	axios.post(`http://localhost:3001/${id}`)
		.then(res => res.data, )
)
//export const getEmail = (id) => fetch(`http://localhost:3001/${id}`).then(res => res.json())