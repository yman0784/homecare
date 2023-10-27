import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { InputForm } from "./InputForm";
import { TextArea } from "./TextArea";
import { ContactButton } from "./ContactButton";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export const Content = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  const onChangeName = (event) => setName(event.target.value);
  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangeInquiry = (event) => setInquiry(event.target.value);

  const onClickAdd = () => {
    const contactDetail = [];
    contactDetail.push(name, email, inquiry);
  };

  return (
    <Box h={"100vh"}>
      <Header />
      <Box
        w={"100vw"}
        h={"120vh"}
        position={"relative"}
        zIndex={0}
        bg={"#F5F7F7"}
        pt={"7%"}
      >
        <Flex
          w="50%"
          h={"75vh"}
          mx={"auto"}
          pt={"16px"}
          px={"20px"}
          bg={"#ffffff"}
          alignItems={"flex-start"}
          flexDirection={"column"}
        >
          <Heading as="h2" h={"3%"} fontSize={"20px"} mb={"1%"}>
            お問い合わせ
          </Heading>

          <Box w={"100%"} mt={"2vh"}>
            <FormLabel bg={"#FFFFFF"}>お名前</FormLabel>
            <InputForm
              placeholder="田中太郎"
              value={name}
              onChange={onChangeName}
              bg={"#FFFFFF"}
            />
          </Box>
          <Box w={"100%"} mt={"1vh"}>
            <FormLabel my={"1vh"}>返信用メールアドレス</FormLabel>
            <InputForm
              placeholder="homecarenavi@mail.com"
              value={email}
              onChange={onChangeEmail}
              height={"66%"}
            />
          </Box>
          <Box w={"100%"} h={"30vh"} my={"1vh"}>
            <FormLabel my={"1vh"}>お問い合わせ内容</FormLabel>
            <TextArea
              placeholder="入力してください"
              value={inquiry}
              onChange={onChangeInquiry}
              height={"27vh"}
            />
          </Box>
          <ChakraLink
            as={ReactRouterLink}
            to="/complete"
            display={"flex"}
            justifyContent={"center"}
            w={"100%"}
            h={"7vh"}
            mt={"4vh"}
            style={{ textDecoration: "none" }}
          >
            <ContactButton
              onClick={onClickAdd}
              bg={"#F06364"}
              color={"#ffffff"}
              fontSize={"20px"}
              width="100%"
              height="100%"
            >
              この内容で問い合わせる
            </ContactButton>
          </ChakraLink>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
