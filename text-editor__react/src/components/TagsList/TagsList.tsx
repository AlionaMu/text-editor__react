import "./TagsList.scss";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { TagsListPropsType } from "../../types";

interface Tag {
  key: number;
  tag: string;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function TagsList(props: TagsListPropsType) {
  const handleDelete = (tagToDelete: string) => () => {
    props.setTagsList((tagsList: string[]) =>
      tagsList.filter((item: string) => item !== tagToDelete)
    );
  };

  return (
    <div className="tags-list__wrapper">
      <p className="tags-list__title">Tags: </p>
      <ul className="tags-list tags-list_common">
        {props.items ? (
          props.items.map((data: string) => {
            let icon;

            return (
              <ListItem key={(Date.now() + Math.random()).toString()}>
                <Chip icon={icon} label={data} onDelete={handleDelete(data)} />
              </ListItem>
            );
          })
        ) : (
          <div>no tags</div>
        )}
      </ul>
    </div>
  );
}

{
  /* <Paper
sx={{
  bgcolor: "#e5e5e5",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  p: 0.5,
  m: 0,
}}
component="ul"
>
{" "} 

    </Paper>*/
}
