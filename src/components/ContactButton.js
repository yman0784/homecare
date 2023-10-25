import React from "react";
import { Link } from "react-router-dom";

export const ContactButton = (props) => {
  const { onClick } = props;
  return (
    <>
      <button onClick={onClick}>
        <Link to="complete">この内容で問い合わせる</Link>
      </button>
    </>
  );
};
