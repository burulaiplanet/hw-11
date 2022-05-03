import { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import DeleteModal from '../UI/DeleteModal'
import styles from './UserList.module.css'

const UserList = (props) => {
	const [modalDelete,setModalDelete]=useState(false)
	const deleteUserHandler = (event) => {
event.preventDefault()
    setModalDelete({
	   title:"delete window",
	   message:"do you really want to delete"
   })
  
}
const delHandler=()=>{
	setModalDelete(null)
}

	return (
		<div>
		
		<Card className={styles.users}>
			<ul>
				{props.users.map(user=>(
					<li key={user.id}>
						{modalDelete&&<DeleteModal title={modalDelete.title} message={modalDelete.message} onNotDelete={delHandler} onDelete={props.onDelete} id={user.id}/>}
					{user.name}
					{user.age} years old
					<Button  onClick={deleteUserHandler}>
						Delete
					</Button>
				
				</li>
				))}
				
			</ul>
			
		</Card>
		</div>
	)
}
export default UserList
