import React from "react";
import { Button } from "@chakra-ui/react";

export const PrimaryButton = (props) => {
  const { children, onClick, bg, color, fontSize, width, height, mt } = props;
  return (
    <Button
      onClick={onClick}
      bg={bg}
      color={color}
      fontSize={fontSize}
      w={width}
      h={height}
      mt={mt}
    >
      {children}
    </Button>
  );
};
