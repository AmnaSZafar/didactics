//getting API for showing all the data
import axios from 'axios';
//export const getNotifications = () => fetch("http://localhost:3001/notifications").then(res => res.json())
export const getNotifications = id => (
	console.log(id),
	axios.post(`http://localhost:3001/notifications`)
		.then(res => res.data, )
)
//export const getNotificationsResponses = () => fetch("http://localhost:3001/notifications-response").then(res => res.json())
export const getNotificationsResponses = id => (
	console.log(id),
	axios.post(`http://localhost:3001/notifications-response`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createNotifications = (todo) => fetch("http://localhost:3001/notifications/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const createNotificationsResponses = (todo) => fetch("http://localhost:3001/notifications-response/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  


//getting API for updating specific data
export const updateNotification = (todo, id) => fetch(`http://localhost:3001/notifications/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const updateNotificationResponse = (todo, id) => fetch(`http://localhost:3001/notifications-response/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteNotification = (todo, id) => fetch(`http://localhost:3001/notifications/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const deleteNotificationResponse = (todo, id) => fetch(`http://localhost:3001/notifications-response/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getNotification = (id) => fetch(`http://localhost:3001/${id}`).then(res => res.json())
export const getNotification = id => (
	console.log(id),
	axios.post(`http://localhost:3001/${id}`)
		.then(res => res.data, )
)
//export const getNotificationResponse = (id) => fetch(`http://localhost:3001/${id}`).then(res => res.json())
export const getNotificationResponse = id => (
	console.log(id),
	axios.post(`http://localhost:3001/${id}`)
		.then(res => res.data, )
)