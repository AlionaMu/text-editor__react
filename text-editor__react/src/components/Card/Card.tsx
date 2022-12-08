import { useEffect, useState } from "react";
import { NoteService } from "../../services/NoteService";
import { CardPropsType, ETypeListMode, Note } from "../../types";
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
      NoteService.editNote(inputValue, id);
      setButton(Ebutton.Edit);
      setEditMode(false);
    }
  };

  const deleteNote = () => {
    console.log("CLICK");
    NoteService.deleteNote(props.note.id);
    const allNotes = NoteService.getNotes();
    props.setNotesList(allNotes);
  };

  return (
    <div className="note-card">
      {!isEditMode ? (
        <div className="note-card__title">{inputValue}</div>
      ) : (
        <input
          type="text"
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
          delete
        </button>
      </div>
    </div>
  );
};
