import "./CardTagsList.scss";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { CardTagsListPropsType } from "../../types";

interface Tag {
  key: number;
  tag: string;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function TagsList(props: CardTagsListPropsType) {
  return (
    <ul className="tags-list_card">
      {props.items ? (
        props.items.map((data: string) => {
          let icon;

          return (
            <ListItem key={(Date.now() + Math.random()).toString()}>
              <Chip icon={icon} label={data} />
            </ListItem>
          );
        })
      ) : (
        <div>no tags</div>
      )}
    </ul>
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
