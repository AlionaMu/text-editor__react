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
};

export type Note = {
  id: string;
  text: string;
  tags: Tag[];
};

export type Tag = {
  tag: string;
};
