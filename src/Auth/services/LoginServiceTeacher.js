import axios from 'axios';

const LoginServiceTeacher = data => (
	console.log(data, "teacher"),
	axios.post('http://localhost:3001/teachers/login', data)
		.then(res => res.status, )
		
)

export default LoginServiceTeacher;
