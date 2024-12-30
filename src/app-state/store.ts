import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import todoReducer from './slices/todoSlice';
import counterReducer from './slices/counterSlice';
import { postApi } from "src/app-state/services/postApi";

const rootReducer = combineReducers({
    todo: todoReducer,
    counter: counterReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todo','counter'], // Only persist the todo reducer
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        persistedReducer,
        [postApi.reducerPath]: postApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(postApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;