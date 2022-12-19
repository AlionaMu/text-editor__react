import { TagService } from "./../services/TagService";
import { NoteService } from "./../services/NoteService";
import { CardEditType } from "./../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../types";

const arr: Note[] = [];
const tagsArr: string[] = [];

const initialState = {
  notesList: arr,
  tags: tagsArr,
  filter: arr,
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
    toggleEditMode: (state, action: PayloadAction<string>) => {
      const index = NoteService.findIndex(action.payload, state.notesList);
      state.notesList[index].isEditMode = !state.notesList[index].isEditMode;
    },
    editNote: (state, action: PayloadAction<CardEditType>) => {
      const index = NoteService.findIndex(action.payload.id, state.notesList);
      state.notesList[index].text = action.payload.text;
    },
    addTags: (state, action: PayloadAction<string[]>) => {
      state.tags.push(...action.payload);
      state.tags = TagService.setUniqueList(state.tags);
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.filter((item: string) => item !== action.payload);
    },
  },
});

export const { create, remove, toggleEditMode, editNote, addTags, deleteTag } =
  notesListSlice.actions;

export default notesListSlice.reducer;
