//getting API for showing all the data
import axios from 'axios';
export const getTeachers = () => fetch("https://didactics.one/teachers").then(res => res.json())

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
export const getTeacher = (id) => fetch(`https://didactics.one/teachers${id}`).then(res => res.json())