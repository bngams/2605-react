import Greeting from './Greeting.jsx'

export default function App() {
  return (
    <div className="exercice">
      <h2>Composant simple avec props</h2>
      <p>
        🎯 Crée un composant <code>Greeting</code> qui reçoit une prop <code>name</code>
        et affiche <code>"Hello [name] !"</code>.
      </p>

      {/* Une fois Greeting.jsx complété, cette ligne affichera "Hello Alice !" */}
      <Greeting name="Alice" />
    </div>
  )
}
