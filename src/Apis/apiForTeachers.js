import axios from 'axios';

//export const getTodosForTeacher = () => fetch("http://localhost:3001/").then(res => res.json())
export const getTodosForTeacher = id => (
	console.log(id),
	axios.post(`http://localhost:3001/`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createTodoForTeachers = (todo) => fetch("http://localhost:3001/teachers/create", {

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
//export const getTeacher = (id) => fetch(`http://localhost:3001/teachers/specific/${id}`).then(res => res.json())
export const getTeacher = id => (
	console.log(id),
	axios.post(`http://localhost:3001/teachers/specific/${id}`)
		.then(res => res.data, )
)