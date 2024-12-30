import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app-state/store";
import { decrement, increment, reset } from "@app-state/slices/counterSlice";

const TodoList: React.FC = () => {
  const { count } = useSelector(
    (state: RootState) => state.persistedReducer.counter
  );
  const dispatch = useDispatch();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl border border-gray-500 rounded-lg">
      {/* {list todo section} */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Counter</h1>
      <ul className="space-y-4">
        <li className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
          <span className="flex-1 text-gray-800">Count is : {count}</span>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(increment())}
              className="px-4 py-2 text-sm rounded-lg bg-green-500 text-white hover:bg-green-600"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Decrement
            </button>
          </div>
        </li>
      </ul>
      <button
        onClick={() => dispatch(reset())}
        className="mt-3 px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Reset
      </button>
    </div>
  );
};

export default TodoList;
