// 👉 À TOI DE JOUER
// 1. Importe useState depuis "react"
// 2. Crée un state [count, setCount] initialisé à 0
// 3. Implémente increment et decrement
// 4. Branche-les sur les boutons et affiche count

import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p>Compteur: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter
