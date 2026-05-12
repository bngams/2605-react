// <TodoFecth />

import { useState } from "react"
import type { Todo } from "../models/Todo";
import mockTodos from "../mocks/Todo.mock";


function TodoFetch() {
  const [todos] = useState<Todo[]>(mockTodos)

  return (
    <div>
      <h2>Todos:</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "(Completed)" : "(Pending)"}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TodoFetch;