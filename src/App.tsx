import { Routes, Route } from "react-router";
import PostList from "@components/PostList";
import TodoList from "@components/TodoList";
import Counter from "@components/Counter";
import RootLayout from "@components/layouts/RootLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<PostList />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/counter" element={<Counter />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
