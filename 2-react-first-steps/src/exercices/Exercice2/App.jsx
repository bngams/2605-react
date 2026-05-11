import Counter from './Counter.jsx'

export default function App() {
  return (
    <div className="exercice">
      <h2>Gestion d'état avec useState</h2>
      <p>
        🎯 Crée un composant <code>Counter</code> avec un compteur, un bouton
        <strong> +</strong> et un bouton <strong>−</strong>.
      </p>

      <Counter />
    </div>
  )
}
