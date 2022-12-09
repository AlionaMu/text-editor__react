import { CardsListPropsType, Note } from "../../types";
import "./CardsList";
import { Card } from "../Card/Card";

export const CardsList = (props: CardsListPropsType) => {
  const res = props.filter.length
    ? props.items.filter((item: Note) =>
        item.tags.includes(props.filter) ? item : 0
      )
    : props.items;
  return (
    <section className="cards-list">
      {res ? (
        res.map((note: Note) => {
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
