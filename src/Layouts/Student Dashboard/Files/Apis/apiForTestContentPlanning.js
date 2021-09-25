//getting API for showing all the data
import axios from 'axios';
export const getTestPlannings = () => fetch("http://localhost:3001/testPlannings").then(res => res.json())
export const getTestPlanningsForGrade1 = () => fetch("http://localhost:3001/testPlannings/Grade-1").then(res => res.json())
export const getTestPlanningsForGrade2 = () => fetch("http://localhost:3001/testPlannings/Grade-2").then(res => res.json())
export const getTestPlanningsForGrade3 = () => fetch("http://localhost:3001/testPlannings/Grade-3").then(res => res.json())
export const getTestPlanningsForGrade4 = () => fetch("http://localhost:3001/testPlannings/Grade-4").then(res => res.json())
export const getTestPlanningsForGrade5 = () => fetch("http://localhost:3001/testPlannings/Grade-5").then(res => res.json())
export const getTestPlanningsForGrade6 = () => fetch("http://localhost:3001/testPlannings/Grade-6").then(res => res.json())
export const getTestPlanningsForGrade7 = () => fetch("http://localhost:3001/testPlannings/Grade-7").then(res => res.json())
export const getTestPlanningsForGrade8 = () => fetch("http://localhost:3001/testPlannings/Grade-8").then(res => res.json())
export const getTestPlanningsForGrade9 = () => fetch("http://localhost:3001/testPlannings/Grade-9").then(res => res.json())
export const getTestPlanningsForGrade10 = () => fetch("http://localhost:3001/testPlannings/Grade-10").then(res => res.json())
export const getTestPlanningsForGrade11 = () => fetch("http://localhost:3001/testPlannings/Grade-11").then(res => res.json())
export const getTestPlanningsForGrade12 = () => fetch("http://localhost:3001/testPlannings/Grade-12").then(res => res.json())

//getting API for inserting the data
export const createTestPlannings = (todo) => fetch("http://localhost:3001/testPlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTestPlannings = (todo, id) => fetch(`http://localhost:3001/testPlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteTestPlannings = (todo, id) => fetch(`http://localhost:3001/testPlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getTestPlanning = (id) => fetch(`http://localhost:3001/${id}`).then(res => res.json())