function ListItem(props) {
  return (
    <h1
      key={props.key}
      onClick={() => {
        props.handleRemove(props.id);
      }}
    >
      {props.item}
    </h1>
  );
}

export default ListItem;
