import { useState } from 'react'

// Import des pages d'exercices
import Exo1 from './exercices/Exercice1/App.jsx'
import Exo2 from './exercices/Exercice2/App.jsx'
import Exo3 from './exercices/Exercice3/App.jsx'
import Exo4 from './exercices/Exercice4/App.jsx'
import Exo5 from './exercices/Exercice5/App.jsx'
import Exo6 from './exercices/Exercice6/App.jsx'

// Liste des exercices avec leur titre et le concept ciblé
const exercices = [
  { id: 1, titre: 'Composant simple avec props',         concept: 'props',                Component: Exo1 },
  { id: 2, titre: 'Gestion d\'état avec useState',       concept: 'useState',             Component: Exo2 },
  { id: 3, titre: 'Listes et rendu dynamique',           concept: '.map() / listes',      Component: Exo3 },
  { id: 4, titre: 'Événements et gestion de formulaire', concept: 'onChange / onSubmit',  Component: Exo4 },
  { id: 5, titre: 'Communication entre composants',      concept: 'lifting state up',     Component: Exo5 },
  { id: 6, titre: 'Effets de bord avec useEffect',       concept: 'useEffect + fetch',    Component: Exo6 },
]

export default function App() {
  const [exoActif, setExoActif] = useState(null)

  // Si un exercice est sélectionné, on l'affiche
  if (exoActif !== null) {
    const exo = exercices.find(e => e.id === exoActif)
    const ExerciceComponent = exo.Component
    return (
      <div>
        <button onClick={() => setExoActif(null)} style={{ marginBottom: '1rem' }}>
          ← Retour à l'accueil
        </button>
        <div style={{ marginBottom: '1rem', color: '#666' }}>
          <strong>Exercice {exo.id}</strong> — {exo.titre}
        </div>
        <ExerciceComponent />
      </div>
    )
  }

  // Sinon, on affiche la page d'accueil
  return (
    <div>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>🚀 React — Prise en main</h1>
        <p style={{ color: '#666' }}>Clique sur un exercice pour commencer.</p>
      </header>

      <div className="grille-exos">
        {exercices.map(exo => (
          <button
            key={exo.id}
            className="carte-exo"
            onClick={() => setExoActif(exo.id)}
          >
            <div className="carte-exo__num">Exercice {exo.id}</div>
            <div className="carte-exo__titre">{exo.titre}</div>
            <div className="carte-exo__concept">🎯 {exo.concept}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
