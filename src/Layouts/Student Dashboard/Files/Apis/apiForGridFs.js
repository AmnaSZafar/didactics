//getting API for showing all the data
import axios from 'axios';
//https://didactics.one/api/files
//export const getAnswers = () => fetch("https://didactics.one/answers").then(res => res.json())
export const getFiles = id => (
	console.log(id),
	axios.post(`https://didactics.one/api/findAll/files`)
		.then(res => res.data, )
)


//getting API for inserting the data
export const createFile = (todo) => fetch("https://didactics.one/api/files", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getAnswer = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())
export const getFileSpecific = id => (
	console.log(id),
	axios.post(`https://didactics.one/api/findOne/files/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecific = id => (
	console.log(id),
	axios.post(`https://didactics.one/answers/specific/${id}`)
		.then(res => res.data, )
)


export const getAnswerSpecificWithSubject = (id, subject) => (
	console.log(id, subject),
	axios.post(`https://didactics.one/answers/specific/subject/${id}&${subject}`)
		.then(res => res.data, )
)
export const getAnswerById = id => (
	console.log(id),
	axios.post(`https://didactics.one/answers/specific/id/${id}`)
		.then(res => res.data, )
)