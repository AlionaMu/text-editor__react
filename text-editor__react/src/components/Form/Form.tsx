import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.scss";
// import { AppContext } from '../context';

import { HashService } from "../../services/HashService";

export interface FormInfo {
  note: string;
}

export const defaultValues: FormInfo = {
  note: "",
};

export const Form = () => {
  // const { dispatch } = useContext(AppContext);
  const [disabled, setDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInfo>({
    defaultValues,
  });

  const createFormCard = (newCard: FormInfo) => {
    /* dispatch({
     // type: Types.Create,
     payload: newCard
   });*/
    const hashes = HashService.findByHash(newCard.note);
    console.log(hashes);
  };

  const onSubmit: SubmitHandler<FormInfo> = (data) => {
    createFormCard(data);
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
      <label>
        New Note:
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
        <p className="form__error">{errors.note && "First name is required"}</p>
        <p className="form__error">{errors.note?.message}</p>
      </label>
      <input
        type="submit"
        value="Submit"
        className="button form__button"
        disabled={disabled}
      ></input>
    </form>
  );
};
