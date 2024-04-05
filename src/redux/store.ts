import { configureStore } from '@reduxjs/toolkit'
import editorReducer from './features/editor-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
   reducer: {
      editorReducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
