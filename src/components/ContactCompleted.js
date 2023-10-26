import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Flex, Link as ChakraLink, Heading, Text } from "@chakra-ui/react";

export const ContactCompleted = () => {
  return (
    <>
      <Header />
      <Box px={"265px"} position={"relative"} zIndex={0}>
        <Flex
          h="251px"
          w="690px"
          bg={"#ffffff"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          top={"60px"}
          mt={"100px"}
          mb={"399px"}
        >
          <Heading as="h2" fontSize={"20px"} mt={"32px"} mb={"48px"}>
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
    </>
  );
};
