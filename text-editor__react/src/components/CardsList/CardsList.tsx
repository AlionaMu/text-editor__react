import { CardsListPropsType, Note } from "../../types";
import "./CardsList.scss";
import { Card } from "../Card/Card";
import { t } from "i18next";

export const CardsList = (props: CardsListPropsType) => {
  console.log(props.list);
  const res = props.filter.length
    ? props.items.filter((item: Note) =>
        item.tags.includes(props.filter) ? item : 0
      )
    : props.items;
  return (
    <section className="cards-list">
      {props.list ? (
        props.list.map((note: Note) => {
          return (
            <Card
              note={note}
              key={note.key}
              setNotesList={props.setNotesList}
              setTagsList={props.setTagsList}
              t={t}
            ></Card>
          );
        })
      ) : (
        <div>NO CARDS</div>
      )}
    </section>
  );
};
