import { FormInfo } from "../components/Form/Form";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../types";

const arr: Note[] = [];
const tagsArr: string[] = [];

const initialState = {
  notesList: arr,
  tags: tagsArr,
  filter: arr,
  editMode: false,
};

export const notesListSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Note>) => {
      state.notesList.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.notesList = state.notesList.filter(
        (item) => item.id !== action.payload
      );
    },
    setEditMode: (state) => {
      state.editMode != state.editMode;
    },
  },
});

export const { create, remove, setEditMode } = notesListSlice.actions;

export default notesListSlice.reducer;
