import TodoFetch from './TodoFetch.jsx'

export default function App() {
  return (
    <div className="exercice">
      <h2>Effets de bord avec useEffect</h2>
      <p>
        🎯 Récupère une liste de tâches depuis l'API
        <code> https://dummyjson.com/todos?limit=10 </code>
        et affiche-les.
      </p>

      <TodoFetch />
    </div>
  )
}
