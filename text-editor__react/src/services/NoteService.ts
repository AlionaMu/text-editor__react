import { Note, Tag } from "../types";

const notes: Note[] = [];

export const NoteService = {
  getNotes(): Note[] {
    const storage: string | null = localStorage.getItem("notes");
    return storage ? JSON.parse(storage) : notes;
  },

  setNotes(text: string, tags: string[]): void {
    const data = this.getNotes();
    const newNote: Note = {
      id: text.length.toString(),
      key: Date.now() + Math.random.toString(),
      text: text,
      tags: tags,
    };
    data.push(newNote);
    localStorage.setItem("notes", JSON.stringify(data));
  },
};

/*public editNote(text: string, id: string)  {
  const data = this.get();
  const index = data.findIndex((item: Note) => item.id === id);
  const newTags = this.findHashService.findByHash(text);
  const uniqueTags = this.tagsStorageService.setUniqueList(data[index].tags.concat(newTags));
  data[index].text = text;
  data[index].tags = uniqueTags;
  localStorage.setItem('notes', '[]');
  localStorage.setItem('notes', JSON.stringify(data));
  this.data$.next(this.get());
  this.tagsStorageService.setNewTagToStorage(newTags);
}

public deleteNote(id: string): void  {
  const data = this.get();
  const res = data.filter((item: { id: string; }) => item.id !== id);
  localStorage.clear();
  localStorage.setItem('notes', JSON.stringify(res));
  this.data$.next(this.get());
} */
