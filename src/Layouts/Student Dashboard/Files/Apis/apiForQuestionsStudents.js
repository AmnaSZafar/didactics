//getting API for showing all the data
import axios from 'axios';
// export const getQuestionsStudents = () => fetch("http://localhost:3001/questions").then(res => res.json())
export const getQuestionsStudents = id => (
	console.log(id),
	axios.post(`http://localhost:3001/questions`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createQuestionsStudents = (todo) => fetch("http://localhost:3001/questions/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateQuestionsStudents = (todo, id) => fetch(`http://localhost:3001/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
// export const getQuestionStudent = (id) => fetch(`http://localhost:3001/questions${id}`).then(res => res.json())
export const getQuestionStudent = id => (
	console.log(id),
	axios.post(`http://localhost:3001/questions${id}`)
		.then(res => res.data, )
)