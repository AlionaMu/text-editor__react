import "./TagsList.scss";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { TagsListPropsType } from "../../types";
import { useDispatch } from "react-redux";
import { deleteTag } from "../../store/notesListSlice";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function TagsList(props: TagsListPropsType) {
  const dispatch = useDispatch();
  const handleDelete = (tagToDelete: string) => () => {
    dispatch(deleteTag(tagToDelete));
  };

  const clickHandler = (data: string) => {
    props.setFilter(data);
  };

  const resetFilter = () => {
    props.setFilter("");
  };

  return (
    <div className="tags-list__wrapper">
      <p className="tags-list__title"> {props.t("tagsList.title")} </p>
      <ul className="tags-list tags-list_common">
        {props.items ? (
          props.items.map((data: string) => {
            let icon;

            return (
              <ListItem key={(Date.now() + Math.random()).toString()}>
                <Chip
                  icon={icon}
                  label={data}
                  onDelete={handleDelete(data)}
                  onClick={() => clickHandler(data)}
                />
              </ListItem>
            );
          })
        ) : (
          <div>no tags</div>
        )}
      </ul>
      <button className="button tags-list__button" onClick={resetFilter}>
        {props.t("tagsList.button")}
      </button>
    </div>
  );
}
