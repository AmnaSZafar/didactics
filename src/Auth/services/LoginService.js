import axios from 'axios';

const LoginService = data => (
	console.log(data),
	axios.post('http://localhost:3001/students/login', data)
		.then(res => res.status, )
		
)

export default LoginService;
