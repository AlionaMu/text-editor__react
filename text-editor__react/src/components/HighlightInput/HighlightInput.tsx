/* eslint-disable no-mixed-spaces-and-tabs */
// i

export const Input = (props: any) => {
  return (
    <>
      {props.props.split(" ").map((s: string) => {
        s.split("")[0] === "#" ? (
          <span className="highlight note-card__title">{s}</span>
        ) : (
          <span className="note-card__title">{s}</span>
        );
      })}
    </>
  );
};
