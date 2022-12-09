import { t, TFunction } from "i18next";
import { Dispatch, SetStateAction } from "react";

export enum LangEnum {
  en = "EN",
  ru = "RU",
}

export enum ETypeListMode {
  common = "COMMON",
  card = "CARD",
}

export type TType = {
  t: TFunction<"translation", undefined>;
};

export type LocalType = {
  t: TFunction<"translation", undefined>;
  changeLanguage: (str: string) => void;
};

export type FormPropsType = {
  t: TFunction<"translation", undefined>;
  setTagsList: Dispatch<any>;
  setNotesList: Dispatch<any>;
};

export type CardPropsType = {
  note: Note;
  key: string;
  setNotesList: Dispatch<any>;
};

export type Note = {
  id: string;
  key: string;
  text: string;
  tags: string[];
};

export type Tag = {
  tag: string;
};

export type TagsListPropsType = {
  items: string[];
  setTagsList: Dispatch<any>;
  setFilter: Dispatch<any>;
};

export type CardTagsListPropsType = {
  items: string[];
};

export type CardsListPropsType = {
  items: Note[];
  setNotesList: Dispatch<SetStateAction<Note[]>>;
  filter: string;
};
