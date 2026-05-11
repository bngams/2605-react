// 👉 À TOI DE JOUER
// Le parent gère le state "todos" et passe une fonction "addTodo" à AddTodo
// pour faire remonter une nouvelle tâche (lifting state up).

import { useState } from "react"
import AddTodo from "./AddTodo.jsx"
import TodoList from "./TodoList.jsx"

function TodoApp() {
    const [todos, setTodos] = useState([])

    const addTodo = (newTodo) => {
        setTodos([...todos, { id: Date.now(), text: newTodo }])
    }

    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo onAddTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )
}

export default TodoApp
