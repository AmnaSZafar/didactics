//getting API for showing all the data
import axios from 'axios';

//export const getAnswers = () => fetch("https://didactics.one/answers").then(res => res.json())

export const getAnswers = id => (
	console.log(id),
	axios.post(`https://didactics.one/answers`)
		.then(res => res.data, )
)



//getting API for inserting the data
export const createAnswers = (todo) => fetch("https://didactics.one/answers/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getAnswer = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())
export const getAnswer = id => (
	console.log(id),
	axios.post(`https://didactics.one/${id}`)
		.then(res => res.data, )
)
