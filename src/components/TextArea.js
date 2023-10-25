import React, { useState } from "react";

export const TextArea = (props) => {
  const { placeholder } = props;
  const [inputText, setInputText] = useState("");
  const onChangeText = (event) => setInputText(event.target.value);

  return (
    <div>
      <textarea
        placeholder={placeholder}
        value={inputText}
        onChange={onChangeText}
      />
    </div>
  );
};
