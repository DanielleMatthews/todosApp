import { useNavigate } from 'react-router-dom'
import { createTodo } from '../services/getRequests'

export default function New(){
    const navigate = useNavigate()

    const createTheTodo = event =>{
        // event.preventDefault() //when commented out it forces page to refresh 
        let add = {description: event.target.description.value, complete: false}
        createTodo(add)
        navigate('/')
    }
    return(
        <div> 
        <h1> Create a New To Do</h1>
        <form onSubmit={createTheTodo} id="newForm">
            Description: <input type="text" name="description"/> <br/> 
            <input type="submit" value="Create Task"/>
        </form>
        </div>
    )
}