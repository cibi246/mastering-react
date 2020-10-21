import React from "react";

const ListGroup = (props) => {
  const { items, valueProperty, textProperty, onItemSelected } = props;
  console.log(items);
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={onItemSelected(item)}
          key={item[valueProperty]}
          className="list-group-item"
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};

export default ListGroup;
