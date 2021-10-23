//getting API for showing all the data
import axios from 'axios';
//export const getTeachers = () => fetch("https://didactics.one/teachers").then(res => res.json())
export const getTeachers = id => (
	console.log(id),
	axios.post(`https://didactics.one/teachers`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createTodoForTeacher = (todo) => fetch("https://didactics.one/teachers/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodoForTeacher = (todo, id) => fetch(`https://didactics.one/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getTeacher = (id) => fetch(`https://didactics.one/teachers${id}`).then(res => res.json())
export const getCourseForTeacher = id => (
	console.log(id),
	axios.post(`https://didactics.one/teachers/specificGrade/${id}`)
		.then(res => res.data, )
)

export const getCourseForTeacherById = id => (
	console.log(id),
	axios.post(`https://didactics.one/teachers/specific/id/${id}`)
		.then(res => res.data, )
)