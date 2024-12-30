import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app-state/store";
import { addTodo, removeTodo, toggleTodo } from "@app-state/slices/todoSlice";
import { Todo } from "@interfaces/todo";

const TodoList: React.FC = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const { todos } = useSelector(
    (state: RootState) => state.persistedReducer.todo
  );
  const dispatch = useDispatch();

  //   handle add todo
  const handleAddTodo = () => {
    if (newTodoText.trim() === "") return;
    dispatch(addTodo({ text: newTodoText }));
    setNewTodoText("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl border border-gray-500 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Add A Todo</h1>
      {/* {add todo section} */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter a todo"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {/* {list todo section} */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Todo List</h1>
      <ul className="space-y-4">
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            <span
              className={`flex-1 ${
                todo.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`px-4 py-2 text-sm rounded-lg ${
                  todo.completed
                    ? "bg-yellow-400 text-white hover:bg-yellow-500"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
