import TodoList from './TodoList.jsx'

export default function App() {
  return (
    <div className="exercice">
      <h2>Listes et rendu dynamique</h2>
      <p>
        🎯 Affiche dynamiquement la liste de tâches du fichier <code>todos.js</code>
        avec <code>.map()</code>. Si la liste est vide, affiche <em>"Pas de tâches"</em>.
      </p>

      <TodoList />
    </div>
  )
}
