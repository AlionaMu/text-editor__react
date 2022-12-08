import { CardsListPropsType, Note } from "../../types";
import "./CardsList";
import { Card } from "../Card/Card";
import { Dispatch, SetStateAction } from "react";

export const CardsList = (props: any) => {
  return (
    <section className="cards-list">
      {props.items ? (
        props.items.map((note: Note) => {
          return (
            <Card
              note={note}
              key={note.key}
              setNotesList={props.setNotesList}
            ></Card>
          );
        })
      ) : (
        <div>NO CARDS</div>
      )}
    </section>
  );
};
