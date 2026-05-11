// 👉 À TOI DE JOUER
// Affiche la liste reçue en props avec .map().

function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    )
}

export default TodoList
