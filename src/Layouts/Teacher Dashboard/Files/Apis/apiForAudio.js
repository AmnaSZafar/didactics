//getting API for showing all the data
import axios from 'axios';
//export const getAudioFile = () => fetch("http://localhost:3001/api/files").then(res => res.json())
export const getAudioFile = id => (
	console.log(id),
	axios.post(`http://localhost:3001/api/files`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createAudioFile = (todo) => fetch("http://localhost:3001/api/files", {
  method: "POST",
  body: todo
})  

//getting API for updating specific data
export const updateRegistrations = (todo, id) => fetch(`http://localhost:3001/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getRegisteration = (id) => fetch(`http://localhost:3001/${id}`).then(res => res.json())
export const getRegisteration = id => (
	console.log(id),
	axios.post(`http://localhost:3001/${id}`)
		.then(res => res.data, )
)