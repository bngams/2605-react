// ES Modules
import { todos } from "./todos.js"

// 👉 À TOI DE JOUER
// Affiche la liste des tâches avec .map().
// Si le tableau est vide, affiche "Pas de tâches".

function TodoList() {
    return (
        <div>
            <h2>Liste des tâches</h2>
            <ul>
                {todos.length === 0 ? (
                    <p>Pas de tâches</p>
                ) : (
                    todos.map((todo) => (
                        <li key={todo.id}>{todo.todo}</li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default TodoList
