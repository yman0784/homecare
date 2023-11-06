import React from "react";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { Box, Flex, Link as ChakraLink, Heading, Text } from "@chakra-ui/react";

export const ContactCompleted = () => {
  const navigate = useNavigate();

  const onClickBackContent = () => {
    navigate("/");
  };

  return (
    <Box h={"100%"}>
      <Header />
      <Box px={"auto"} w={"100vw"} h={"82vh"}>
        <Flex
          h="25vh"
          w="69vw"
          bg={"#ffffff"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          mt={"12vh"}
          mx={"auto"}
          pb={"3vh"}
        >
          <Heading as="h2" fontSize={"20px"} mb={"4vh"}>
            問い合わせ完了
          </Heading>
          <Box w="343px" h="42px" mb={"16px"}>
            <Text fontSize="14px" textAlign={"center"}>
              ご予約が完了しました。
              <br />
              事業所からの連絡をお待ち下さい。
            </Text>
          </Box>
          <ChakraLink
            as="a"
            color="#F06364"
            fontSize={"14px"}
            onClick={onClickBackContent}
          >
            事業所のページに戻る
          </ChakraLink>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
