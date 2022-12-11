import { Note } from "../types";
import { HashService } from "./HashService";
import { TagService } from "./TagService";

const notes: Note[] = [];

export const NoteService = {
  getNotes(): Note[] {
    const storage: string | null = localStorage.getItem("notes");
    return storage ? JSON.parse(storage) : notes;
  },

  getNoteById(id: string) {
    const data = this.getNotes();
    const index = data.findIndex((item: Note) => item.id === id);
    return data[index];
  },

  setNotes(text: string, tags: string[]): void {
    const data = this.getNotes();
    const newNote: Note = {
      id: (text.length + Math.random()).toString(),
      key: (Date.now() + Math.random()).toString(),
      text: text,
      tags: tags,
    };
    data.push(newNote);
    localStorage.setItem("notes", JSON.stringify(data));
  },

  editNote(text: string, id: string) {
    const data = this.getNotes();
    const index = data.findIndex((item: Note) => item.id === id);
    const newTags = HashService.findByHash(text);
    const uniqueTags = TagService.setUniqueList(
      data[index].tags.concat(newTags)
    );
    data[index].text = text;
    data[index].tags = uniqueTags;
    localStorage.setItem("notes", "[]");
    localStorage.setItem("notes", JSON.stringify(data));
    TagService.setNewTagToStorage(newTags);
  },

  deleteNote(id: string) {
    const data = this.getNotes();
    const res = data.filter((item: { id: string }) => item.id !== id);
    localStorage.setItem("notes", "");
    localStorage.setItem("notes", JSON.stringify(res));
  },
};
