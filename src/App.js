import { useState } from 'react'
import './App.css'
import AddUser from './components/users/AddUser'
import DeleteModal from './components/UI/DeleteModal'
import UserList from './components/users/UsersList'

function App() {
	const [userList, setUserList] = useState([])

	const addUserHandler = (uName, uAge) => {
		setUserList((prevUserList) => {
			return [
				...prevUserList,
				{
					name: uName,
					age: uAge,
					id: Math.random().toString(),
				},
			]
		})
	}

	const deleteFunctionHandler = (id) => {
		const filteredList = userList.filter((el) => {
			if (el.id !== id) {
				return [el]
			}
		})
		console.log(filteredList)
		setUserList(filteredList)
	}

	return (
		<div className='App'>
			<AddUser onAddUser={addUserHandler} />

			<UserList users={userList} onDelete={deleteFunctionHandler} />
		</div>
	)
}

export default App
