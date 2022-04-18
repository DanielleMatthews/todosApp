import axios from 'axios' //npm i axios

//ALL
export function todoList(){
    const response = axios.get('http://localhost:3001/todos')
    return response
}

//ONE
export function oneTodo(id){
    const response = axios.get(`http://localhost:3001/todos/${id}`)
    return response
}

//DELETE
export function deleteTodo(id){
    const response = axios.delete(`http://localhost:3001/todos/${id}`)
    return response
}

//CREATE
export function createTodo(add){
    const response = axios.post('http://localhost:3001/todos', add)
    return response
}

//EDIT
export function editTodo(id, updatedTodo){
    const response = axios.put(`http://localhost:3001/todos/${id}`, updatedTodo)
    return response
}
