import TodoApp from './TodoApp.jsx'

export default function App() {
  return (
    <div className="exercice">
      <h2>Communication entre composants</h2>
      <p>
        🎯 Le parent <code>TodoApp</code> gère la liste. L'enfant <code>AddTodo</code> permet
        d'ajouter une tâche (lifting state up). <code>TodoList</code> affiche la liste reçue
        en props.
      </p>

      <TodoApp />
    </div>
  )
}
