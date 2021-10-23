//getting API for showing all the data
import axios from 'axios';

//export const getRegistrations = () => fetch("https://didactics.one/").then(res => res.json())
export const getRegistrations = id => (
	console.log(id),
	axios.post(`https://didactics.one/`)
		.then(res => res.data, )
)

//getting API for inserting the data
export const createRegistrations = (todo) => fetch("https://didactics.one/students/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateRegistrations = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getRegisterationStudents = (id) => fetch(`https://didactics.one/students/specific/${id}`).then(res => res.json())
export const getRegisterationStudents = id => (
	console.log(id),
	axios.post(`https://didactics.one/students/specific/${id}`)
		.then(res => res.data, )
		
)
export const getRegisterationStudentsById = id => (
	console.log(id),
	axios.post(`https://didactics.one/students/specific/id/${id}`)
		.then(res => res.data, )
)
//export const getRegisterationStudentsById = (id) => fetch(`https://didactics.one/students/specific/id/${id}`).then(res => res.json())