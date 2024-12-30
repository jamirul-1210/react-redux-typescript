import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../interfaces/todo";


interface TodoState {
    todos: Todo[]
}

function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const initialState: TodoState = {
    todos: [],
}

type addTodoPayload = {
    text: string,
    completed?: boolean
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<addTodoPayload>) => {
            state.todos.push({
                id: generateId(),
                text: action.payload.text,
                completed: action.payload.completed || false
            });
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        resetTodoState: (state) => {
            state.todos = [];
        }
    }
});

export const { addTodo, toggleTodo, removeTodo, resetTodoState } = todoSlice.actions;

export default todoSlice.reducer;