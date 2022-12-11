import { Highlight } from "@material-ui/icons";
import { FormEvent, useCallback, useState } from "react";
import { HashService } from "../../services/HashService";
import { NoteService } from "../../services/NoteService";
import { TagService } from "../../services/TagService";
import { CardPropsType } from "../../types";
import CardTagsList from "../CardTagsList/CardTagsList";
import { Input } from "../HighlightInput/HighlightInput";
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
  };

  const onChangeHandler = (e: FormEvent<HTMLDivElement>) => {
    // setInputValue(e.target.value);
    // {light(inputValue)})}
    console.log("e", e, "e.target", e.target);
  };

  // const value: any = inputValue
  //   ? inputValue.split(" ").map((s: string) => {
  //       s.split("")[0] === "#" ? <span className="highlight">{s}</span> : s;
  //     })
  //   : "";

  // const Component = TitleComponent as React.ElementType;
  return (
    <div className="note-card">
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

{
  /* <div contentEditable="true" onChange={(e) => onChangeHandler(e)}>
{light(inputValue)}
</div> */
}
