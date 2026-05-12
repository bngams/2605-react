// 👉 À TOI DE JOUER
// - Importe useState ET useEffect
// - Dans useEffect, fetch l'API et stocke les todos dans le state
// - Affiche les todos dans la liste

import { useState, useEffect } from "react"

function TodoFetch() {
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([])

   
    // useEffect( function, dependencies )
    // dependencies: [] => useEffect s'exécute une seule fois au montage du composant (componentDidMount)
    // dependencies: [todos] => useEffect s'exécute à chaque fois que "todos" change

    useEffect(() => {
        fetch("https://dummyjson.com/todos?limit=10")
            .then((response) => response.json())
            .then((data) => {
                setTodos(data.todos)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <h2>Todos depuis l'API</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>{todo.todo}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TodoFetch
