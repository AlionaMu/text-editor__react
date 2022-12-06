import { Note } from "../../types";
import "./CardsList";
import { Card } from "../Card/Card";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export const CardsList = (props: any) => {
  return (
    <section className="cards-list">
      {props.items ? (
        props.items.map((note: Note) => {
          return <Card note={note} key={note.key}></Card>;
        })
      ) : (
        <div>NO CARDS</div>
      )}
    </section>
  );
};

// <mat-chip *ngFor="let tag of note.tags" class="note-card__tag">
// {{tag.name}}
// </mat-chip>

// <button (click)="switchClick(note.id, note.text)">
// <button mat-button (click)="deleteNote(note.id)">
