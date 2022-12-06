import { t, TFunction } from "i18next";
import { Dispatch, SetStateAction } from "react";

export enum LangEnum {
  en = "EN",
  ru = "RU",
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
