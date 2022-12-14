import { useState } from "react";
import { HashService } from "../../services/HashService";
import { NoteService } from "../../services/NoteService";
import { TagService } from "../../services/TagService";
import { CardPropsType } from "../../types";
import CardTagsList from "../CardTagsList/CardTagsList";
import "./Card.scss";

export enum Ebutton {
  Edit = "edit",
  Save = "save",
}

export const Card = (props: CardPropsType) => {
  const [isEditMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(props.note.text);
  const [button, setButton] = useState(Ebutton.Edit);

  const switchClick = (id: string, inputValue: string) => {
    setEditMode(true);
    if (button === Ebutton.Edit) {
      setButton(Ebutton.Save);
    } else {
      const tags = HashService.findByHash(inputValue);
      TagService.setNewTagToStorage(tags);
      const commonTags = TagService.getAllTags();
      props.setTagsList(commonTags);

      NoteService.editNote(inputValue, id);
      setButton(Ebutton.Edit);
      setEditMode(false);
    }
  };

  const deleteNote = () => {
    NoteService.deleteNote(props.note.id);
    const allNotes = NoteService.getNotes();
    props.setNotesList(allNotes);
    const commonTags = TagService.getAllTags();
    props.setTagsList(commonTags);
  };

  const setNoteNotEditable = () => {
    setButton(Ebutton.Edit);
    setEditMode(false);
    setInputValue(props.note.text);
  };

  const clickNoteHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    if (isEditMode && target.className === "tags-list_card")
      setNoteNotEditable();
  };

  return (
    <div
      className="note-card"
      onClick={(e: React.MouseEvent) => clickNoteHandler(e)}
    >
      {!isEditMode ? (
        <div className="note-card__title">{inputValue}</div>
      ) : (
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
      <CardTagsList items={props.note.tags}></CardTagsList>
      <div className="note-card__button-container">
        <button
          className="button note-card__button"
          onClick={() => switchClick(props.note.id, inputValue)}
        >
          {button}
        </button>
        <button className="button note-card__button" onClick={deleteNote}>
          {props.t("note.delete")}
        </button>
      </div>
    </div>
  );
};
