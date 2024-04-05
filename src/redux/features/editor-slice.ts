import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
   value: EditorState
}

type EditorState = {
   data: string
}

const initialState = {
   value: {
      data: '',
   } as EditorState,
} as InitialState

export const editor = createSlice({
   name: 'editor',
   initialState,
   reducers: {
      editText: (state, action: PayloadAction<string>) => {
         return {
            value: {
               data: action.payload,
            },
         }
      },
   },
})

export const { editText } = editor.actions
export default editor.reducer
