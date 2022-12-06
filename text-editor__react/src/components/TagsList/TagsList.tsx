import "./TagsList.scss";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

interface Tag {
  key: number;
  tag: string;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function TagsList(props: any) {
  const handleDelete = (tagToDelete: string) => () => {
    props.setTagsList((tagsList: string[]) =>
      tagsList.filter((item: string) => item !== tagToDelete)
    );
  };

  return (
    <section className="tags-list">
      <Paper
        sx={{
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
        {props.items ? (
          props.items.map((data: string) => {
            let icon;

            return (
              <ListItem key={Date.now() + Math.random()}>
                <Chip icon={icon} label={data} onDelete={handleDelete(data)} />
              </ListItem>
            );
          })
        ) : (
          <div>no tags</div>
        )}
      </Paper>
    </section>
  );
}
