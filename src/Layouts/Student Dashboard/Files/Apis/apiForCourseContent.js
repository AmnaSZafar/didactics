//getting API for showing all the data
import axios from 'axios';
// export const getCourseContents = () => fetch("http://localhost:3001/coursePlannings").then(res => res.json())
export const getCourseContents = id => (
	console.log(id),
	axios.post(`http://localhost:3001/coursePlannings`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createCourseContents = (todo) => fetch("http://localhost:3001/coursePlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateCourseContents = (todo, id) => fetch(`http://localhost:3001/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
// export const getCourseContent = (id) => fetch(`http://localhost:3001/${id}`).then(res => res.json())
export const getCourseContent = id => (
	console.log(id),
	axios.post(`http://localhost:3001/${id}`)
		.then(res => res.data, )
)