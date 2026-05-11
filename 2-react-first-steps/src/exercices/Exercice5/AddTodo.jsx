// 👉 À TOI DE JOUER
// 1. Importe useState et crée un state local [value, setValue]
// 2. Implémente handleChange pour mettre à jour value
// 3. Dans handleSubmit, appelle onAddTodo(value) pour faire remonter
//    la nouvelle tâche au parent, puis réinitialise le champ

import { useState } from "react"

function AddTodo({ onAddTodo }) {
    const [value, setValue] = useState("")

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (value.trim()) {
            onAddTodo(value)
            setValue("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Nouvelle tâche..."
            />
            <button type="submit">Ajouter</button>
        </form>
    )
}

export default AddTodo
