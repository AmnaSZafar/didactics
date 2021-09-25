//getting API for showing all the data
import axios from 'axios';
export const getCoursePlannings = () => fetch("http://localhost:3001/coursePlannings").then(res => res.json())
export const getCoursePlanningsForGrade1 = () => fetch("http://localhost:3001/coursePlannings/Grade-1").then(res => res.json())
export const getCoursePlanningsForGrade2 = () => fetch("http://localhost:3001/coursePlannings/Grade-2").then(res => res.json())
export const getCoursePlanningsForGrade3 = () => fetch("http://localhost:3001/coursePlannings/Grade-3").then(res => res.json())
export const getCoursePlanningsForGrade4 = () => fetch("http://localhost:3001/coursePlannings/Grade-4").then(res => res.json())
export const getCoursePlanningsForGrade5 = () => fetch("http://localhost:3001/coursePlannings/Grade-5").then(res => res.json())
export const getCoursePlanningsForGrade6 = () => fetch("http://localhost:3001/coursePlannings/Grade-6").then(res => res.json())
export const getCoursePlanningsForGrade7 = () => fetch("http://localhost:3001/coursePlannings/Grade-7").then(res => res.json())
export const getCoursePlanningsForGrade8 = () => fetch("http://localhost:3001/coursePlannings/Grade-8").then(res => res.json())
export const getCoursePlanningsForGrade9 = () => fetch("http://localhost:3001/coursePlannings/Grade-9").then(res => res.json())
export const getCoursePlanningsForGrade10 = () => fetch("http://localhost:3001/coursePlannings/Grade-10").then(res => res.json())
export const getCoursePlanningsForGrade11 = () => fetch("http://localhost:3001/coursePlannings/Grade-11").then(res => res.json())
export const getCoursePlanningsForGrade12 = () => fetch("http://localhost:3001/coursePlannings/Grade-12").then(res => res.json())

//getting API for inserting the data
export const createCoursePlannings = (todo) => fetch("http://localhost:3001/coursePlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateCoursePlannings = (todo, id) => fetch(`http://localhost:3001/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteCoursePlannings = (todo, id) => fetch(`http://localhost:3001/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getCoursePlanning = (id) => fetch(`http://localhost:3001/${id}`).then(res => res.json())