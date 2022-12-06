const tages: string[] = [];

export const TagService = {
  getAllTags(): string[] {
    const storage: string | null = localStorage.getItem("tags");
    return storage ? JSON.parse(storage) : tages;
  },

  setNewTagToStorage(tags: string[]): void {
    const data = this.getAllTags();
    const resultTags = data.concat(tags);
    const uniqueTags = this.setUniqueList(resultTags);
    localStorage.setItem("tags", JSON.stringify(uniqueTags));
  },

  setUniqueList(tags: string[]): string[] {
    const result = [...new Set(tags)];
    return result;
  },
};
