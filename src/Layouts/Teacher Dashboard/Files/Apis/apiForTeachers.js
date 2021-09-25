//getting API for showing all the data
import axios from 'axios';
//export const getTeachers = () => fetch("http://localhost:3001/teachers").then(res => res.json())
export const getTeachers = id => (
	console.log(id),
	axios.post(`http://localhost:3001/teachers`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createTodoForTeacher = (todo) => fetch("http://localhost:3001/teachers/create", {
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
//export const getTeacher = (id) => fetch(`http://localhost:3001/teachers${id}`).then(res => res.json())
export const getTeacher = id => (
	console.log(id),
	axios.post(`http://localhost:3001/teachers${id}`)
		.then(res => res.data, )
)