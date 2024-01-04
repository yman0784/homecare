import React from "react";

export const PulldownMenu = (props) => {
  const arr = props.arr;
  return (
    <>
      <select>
        {arr.map((element) => {
          return <option key={element}>{element}</option>;
        })}
      </select>
    </>
  );
};
