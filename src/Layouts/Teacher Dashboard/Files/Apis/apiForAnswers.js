//getting API for showing all the data
import axios from 'axios';
export const getAnswers = () => fetch("http://localhost:3001/answers").then(res => res.json())

export const getAnswersMCQ = () => fetch("http://localhost:3001/answers/MCQ-answers").then(res => res.json())
export const getAnswersBlanks = () => fetch("http://localhost:3001/answers/Blanks-answers").then(res => res.json())
export const getAnswersPronunciation = () => fetch("http://localhost:3001/answers/Pronunciation-answers").then(res => res.json())
export const getAnswersQA = () => fetch("http://localhost:3001/answers/QA-answers").then(res => res.json())
export const getAnswersHandWriting = () => fetch("http://localhost:3001/answers/HandWriting-answers").then(res => res.json())

export const getAnswersGrade1 = () => fetch("http://localhost:3001/answers/Grade-1").then(res => res.json())
export const getAnswersGrade2 = () => fetch("http://localhost:3001/answers/Grade-2").then(res => res.json())
export const getAnswersGrade3 = () => fetch("http://localhost:3001/answers/Grade-3").then(res => res.json())
export const getAnswersGrade4 = () => fetch("http://localhost:3001/answers/Grade-4").then(res => res.json())
export const getAnswersGrade5 = () => fetch("http://localhost:3001/answers/Grade-5").then(res => res.json())
export const getAnswersGrade6 = () => fetch("http://localhost:3001/answers/Grade-6").then(res => res.json())
export const getAnswersGrade7 = () => fetch("http://localhost:3001/answers/Grade-7").then(res => res.json())
export const getAnswersGrade8 = () => fetch("http://localhost:3001/answers/Grade-8").then(res => res.json())
export const getAnswersGrade9 = () => fetch("http://localhost:3001/answers/Grade-9").then(res => res.json())
export const getAnswersGrade10 = () => fetch("http://localhost:3001/answers/Grade-10").then(res => res.json())
export const getAnswersGrade11 = () => fetch("http://localhost:3001/answers/Grade-11").then(res => res.json())
export const getAnswersGrade12 = () => fetch("http://localhost:3001/answers/Grade-12").then(res => res.json())

export const getAnswersGrade1ForTest = () => fetch("http://localhost:3001/answers/Grade-1-test").then(res => res.json())
export const getAnswersGrade2ForTest = () => fetch("http://localhost:3001/answers/Grade-2-test").then(res => res.json())
export const getAnswersGrade3ForTest = () => fetch("http://localhost:3001/answers/Grade-3-test").then(res => res.json())
export const getAnswersGrade4ForTest = () => fetch("http://localhost:3001/answers/Grade-4-test").then(res => res.json())
export const getAnswersGrade5ForTest = () => fetch("http://localhost:3001/answers/Grade-5-test").then(res => res.json())
export const getAnswersGrade6ForTest = () => fetch("http://localhost:3001/answers/Grade-6-test").then(res => res.json())
export const getAnswersGrade7ForTest = () => fetch("http://localhost:3001/answers/Grade-7-test").then(res => res.json())
export const getAnswersGrade8ForTest = () => fetch("http://localhost:3001/answers/Grade-8-test").then(res => res.json())
export const getAnswersGrade9ForTest = () => fetch("http://localhost:3001/answers/Grade-9-test").then(res => res.json())
export const getAnswersGrade10ForTest = () => fetch("http://localhost:3001/answers/Grade-10-test").then(res => res.json())
export const getAnswersGrade11ForTest = () => fetch("http://localhost:3001/answers/Grade-11-test").then(res => res.json())
export const getAnswersGrade12ForTest = () => fetch("http://localhost:3001/answers/Grade-12-test").then(res => res.json())

//getting API for inserting the data
export const createAnswers = (todo) => fetch("http://localhost:3005/answers/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAnserReview = (todo, id) => fetch(`http://localhost:3001/answers/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAnswer = (id) => fetch(`http://localhost:3001/${id}`).then(res => res.json())