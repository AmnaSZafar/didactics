//getting API for showing all the data
import axios from 'axios';

//export const getAnswers = () => fetch("https://didactics.one/answers-test").then(res => res.json())
export const getAnswersTest = id => (
	console.log(id),
	axios.post(`https://didactics.one/answers-test`)
		.then(res => res.data, )
)


//getting API for inserting the data
export const createAnswersTest  = (todo) => fetch("https://didactics.one/answers-test/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getAnswer = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())
export const getAnswerTest  = id => (
	console.log(id),
	axios.post(`https://didactics.one/answers-test/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecificWithSubjectTest  = (id,subject) => (
	console.log(id,subject),
	axios.post(`https://didactics.one/answers-test/specific/subject/${id}&${subject}`)
		.then(res => res.data, )
)

export const getAnswerSpecificTest  = id => (
	console.log(id),
	axios.post(`https://didactics.one/answers-test/specific/${id}`)
		.then(res => res.data, )
)

export const getAnswerByIdTest  = id => (
	console.log(id),
	axios.post(`https://didactics.one/answers-test/specific/id/${id}`)
		.then(res => res.data, )
)