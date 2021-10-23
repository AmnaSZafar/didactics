//getting API for showing all the data
import axios from 'axios';

export const getTestimonials = id => (
	console.log(id),
	axios.post(`https://didactics.one/testimonials`)
		.then(res => res.data, )
)

//getting API for inserting the data
export const createTestimonials = (todo) => fetch("https://didactics.one/testimonials/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updateTestimonial = (todo, id) => fetch(`https://didactics.one/testimonials/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteTestimonial = (todo, id) => fetch(`https://didactics.one/testimonials/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for getting specific data
export const getTestimonial = (id) => fetch(`https://didactics.one/${id}`).then(res => res.json())