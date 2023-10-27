import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex, Link as ChakraLink, Heading, Text } from "@chakra-ui/react";

export const ContactCompleted = () => {
  return (
    <Box h={"100%"}>
      <Header />
      <Box px={"auto"} position={"relative"} zIndex={0} w={"100vw"}>
        <Flex
          h="251px"
          w="690px"
          bg={"#ffffff"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          top={"60px"}
          mt={"100px"}
          mx={"auto"}
          pb={"32px"}
          // mb={"399px"}
        >
          <Heading as="h2" fontSize={"20px"} mb={"48px"}>
            問い合わせ完了
          </Heading>
          <Box w="343px" h="42px" mb={"16px"}>
            <Text fontSize="14px" textAlign={"center"}>
              ご予約が完了しました。
              <br />
              事業所からの連絡をお待ち下さい。
            </Text>
          </Box>
          <ChakraLink color="#F06364" fontSize={"14px"}>
            <ReactRouterLink to="/">事業所のページに戻る</ReactRouterLink>
          </ChakraLink>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
