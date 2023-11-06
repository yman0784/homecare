import React, { useState } from "react";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";
import { InputForm } from "../atoms/input/InputForm";
import { TextArea } from "../atoms/textarea/TextArea";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import {
  Box,
  Flex,
  Heading,
  FormLabel,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

export const Content = () => {
  const navigate = useNavigate();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [detailsError, setDetailsError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const inputName = (event) => {
    setName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputDetails = (event) => {
    setDetails(event.target.value);
  };

  const CreateInquiry = () => {
    axios
      .post("http://localhost:3000/api/inquiries", {
        name: name,
        email: email,
        details: details,
      })
      .then(() => {
        setName("");
        setEmail("");
        setDetails("");
        navigate("/complete");
      })
      .catch((error) => {
        console.error("Error creating inquiry:", error);
        const nameError = error.response.data.errors.name;
        const emailError = error.response.data.errors.email;
        const detailsError = error.response.data.errors.details;
        setNameError(nameError);
        setEmailError(emailError);
        setDetailsError(detailsError);
      });
  };

  return (
    <Box h={"100vh"}>
      <Header />
      <Box w={"100vw"} h={"100%"} bg={"#F5F7F7"} pt={"10vh"}>
        <Flex
          w="50%"
          h={"75vh"}
          mx={"auto"}
          pt={"1.6vh"}
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
            <Text color={"red.400"}>{nameError ? nameError : ""}</Text>
            <InputForm
              placeholder="田中太郎"
              value={name}
              onChange={inputName}
              bg={"#FFFFFF"}
            />
          </Box>
          <Box w={"100%"} mt={"1vh"}>
            <FormLabel my={"1vh"}>返信用メールアドレス</FormLabel>
            <Text color={"red.400"}>{emailError ? emailError : ""}</Text>
            <InputForm
              placeholder="homecarenavi@mail.com"
              value={email}
              onChange={inputEmail}
              height={"66%"}
            />
          </Box>
          <Box w={"100%"} h={"30vh"} my={"1vh"}>
            <FormLabel my={"1vh"}>お問い合わせ内容</FormLabel>
            <Text color={"red.400"}>{detailsError ? detailsError : ""}</Text>
            <TextArea
              placeholder="入力してください"
              value={details}
              onChange={inputDetails}
              height={"35vh"}
            />
          </Box>
          <Box w={"100%"} mt={"13vh"}>
            <PrimaryButton
              onClick={CreateInquiry}
              bg={"#F06364"}
              color={"#ffffff"}
              fontSize={"20px"}
              width="100%"
              height={"5vh"}
              my={"auto"}
            >
              この内容で問い合わせる
            </PrimaryButton>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
