import AddTodo from './AddTodo.jsx'

export default function App() {
  return (
    <div className="exercice">
      <h2>Événements et gestion de formulaire</h2>
      <p>
        🎯 Crée un formulaire avec un input. Affiche la valeur dans la console
        à chaque <code>onChange</code> et une alerte au <code>onSubmit</code>.
      </p>

      <AddTodo />
    </div>
  )
}
