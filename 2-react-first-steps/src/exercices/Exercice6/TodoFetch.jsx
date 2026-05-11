// 👉 À TOI DE JOUER
// - Importe useState ET useEffect
// - Dans useEffect, fetch l'API et stocke les todos dans le state
// - Affiche les todos dans la liste

import { useState, useEffect } from "react"

function TodoFetch() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/todos?limit=10")
            .then((response) => response.json())
            .then((data) => setTodos(data.todos))
    }, [])

    return (
        <div>
            <h2>Todos depuis l'API</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoFetch
