import "./TagsList.scss";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { TagsListPropsType } from "../../types";
import { TagService } from "../../services/TagService";
import { NoteService } from "../../services/NoteService";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function TagsList(props: TagsListPropsType) {
  const handleDelete = (tagToDelete: string) => () => {
    props.setTagsList((tagsList: string[]) =>
      tagsList.filter((item: string) => item !== tagToDelete)
    );
    TagService.deleteTagFromStorage(tagToDelete);
    NoteService.deleteNotesByTag(tagToDelete);
    props.setNotesList(NoteService.getNotes);
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
