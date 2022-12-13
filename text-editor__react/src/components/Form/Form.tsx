import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.scss";
import { TagService } from "../../services/TagService";

import { HashService } from "../../services/HashService";
import { FormPropsType, Note } from "../../types";
import { NoteService } from "../../services/NoteService";
import { create } from "../../store/notesListSlice";
import { useDispatch } from "react-redux";

export interface FormInfo {
  note: string;
}

export const defaultValues: FormInfo = {
  note: "",
};

export const Form = (props: FormPropsType) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInfo>({
    defaultValues,
  });

  const createNote = (text: string, tags: string[]) => {
    const newNote: Note = {
      id: (text.length + Math.random()).toString(),
      key: (Date.now() + Math.random()).toString(),
      text: text,
      tags: tags,
    };
    dispatch(create(newNote));
  };

  const onSubmit: SubmitHandler<FormInfo> = (data) => {
    const tags = HashService.findByHash(data.note);
    // TagService.setNewTagToStorage(tags);
    // const commonTags = TagService.getAllTags();
    // props.setTagsList(commonTags);
    // NoteService.setNotes(data.note, tags);
    // const allNotes = NoteService.getNotes();
    // props.setNotesList(allNotes);
    createNote(data.note, tags);
  };

  const setButtonAble = () => {
    setDisabled(false);
  };
  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      onChange={setButtonAble}
    >
      <label>{props.t("form.title")}:</label>
      <input
        type="text"
        {...register("note", {
          required: true,
          minLength: {
            value: 3,
            message: "This input must exceed 3 characters",
          },
        })}
        className="form__input"
        placeholder="Enter text"
      />
      <p className="form__error">{errors.note && props.t("form.error")}</p>
      <p className="form__error">{errors.note?.message}</p>
      <input
        type="submit"
        className="button form__button"
        disabled={disabled}
        value={props.t("form.button").toString()}
      ></input>
    </form>
  );
};
