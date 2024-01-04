import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";

export const TextArea = (props) => {
  const { placeholder, height, onChange } = props;

  return (
    <div>
      <Textarea
        placeholder={placeholder}
        onChange={onChange}
        resize={"none"}
        h={height}
      />
    </div>
  );
};
