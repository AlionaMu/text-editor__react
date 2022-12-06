import { CardPropsType, Note } from "../../types";
import "./Card.scss";

export enum buttonTitle {
  Edit = "edit",
  Save = "save",
}

export const Card = (props: CardPropsType) => {
  const buttonTitle = "delete";
  return (
    <div className="note-card" key={props.key}>
      <div className="note-card__title">{props.note.text}</div>
      <input type="text" />
      <div className="note-card__tag-list">TAGS LIST</div>
      <button>{buttonTitle}</button>
      <button>delete</button>
    </div>
  );
};
