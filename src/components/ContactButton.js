import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link as ChakraLink } from "@chakra-ui/react";

export const ContactButton = (props) => {
  const { children, onClick, bg, color, fontSize, width, height } = props;
  return (
    <Button
      onClick={onClick}
      bg={bg}
      color={color}
      fontSize={fontSize}
      w={width}
      h={height}
    >
      {children}
    </Button>
  );
};
