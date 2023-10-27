import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";

export const TextArea = (props) => {
  const { placeholder, height } = props;
  const [inputText, setInputText] = useState("");
  const onChangeText = (event) => setInputText(event.target.value);

  return (
    <div>
      <Textarea
        placeholder={placeholder}
        value={inputText}
        onChange={onChangeText}
        resize={"none"}
        h={height}
      />
    </div>
  );
};
