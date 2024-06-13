import { useEffect } from 'react'
import './App.css'
import Login from './components/Pages/Login'
import constants from './constants'
import DBService from "./Service/DBService"

function App() {

	useEffect(() => {
		var service = new DBService(constants.USER_DB_NAME)
		var users = null;
		const getUsers = async () => {
			users = await service.Get();
		}
		getUsers();

		const addUser = async (user) => {
			users = await service.Add(user);
		}
	
		addUser({name : "testUser", userName : "testUserName", password : "dhfgsgjh"});
		
	}, [])

	return (
		<Login />
	)
}

export default App
