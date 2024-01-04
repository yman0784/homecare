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
import { PulldownMenu } from "../atoms/input/PulldownMenu";

export const Reserve = () => {
  const navigate = useNavigate();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [detailsError, setDetailsError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const age = [...Array(41)].map((_, i) => i + 60);
  const AlertAge = () => {
    console.log(age);
  };

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
    <Box h={"100%"} w={"100vw"}>
      <Header />
      <Flex w={"100%"} mt={"5vh"} flexDirection={"column"} mx={"auto"}>
        <Box
          w={"80%"}
          h={"100%"}
          mt={"3vh"}
          bg={"#F5F7F7"}
          alignItems={"flex-start"}
          mx={"auto"}
        >
          <ChakraLink as="a" color="#F06364" fontSize={"14px"}>
            ＜ 事業所のページに戻る
          </ChakraLink>
        </Box>
        <Box w={"100vw"} h={"100%"} bg={"#F5F7F7"} mt={"1vh"}>
          <Flex
            w="80%"
            h={"75vh"}
            mx={"auto"}
            mb={"10vh"}
            pt={"1.6vh"}
            px={"20px"}
            bg={"#ffffff"}
            alignItems={"flex-start"}
            flexDirection={"column"}
          >
            <Heading as="h2" h={"3%"} fontSize={"20px"} mb={"1%"}>
              Web予約
            </Heading>
            <Box w={"100%"} mt={"2vh"}>
              <FormLabel bg={"#FFFFFF"}>事業所名</FormLabel>
            </Box>
            <Box w={"100%"} mt={"2vh"}>
              <FormLabel bg={"#FFFFFF"}>面談希望日時</FormLabel>
            </Box>
            <Box w={"100%"} mt={"2vh"}>
              <FormLabel bg={"#FFFFFF"}>利用者のお名前</FormLabel>
              <Text color={"red.400"}>{nameError ? nameError : ""}</Text>
              <InputForm
                placeholder="田中太郎"
                value={name}
                onChange={inputName}
                bg={"#FFFFFF"}
              />
            </Box>
            <Box w={"100%"} mt={"2vh"}>
              <FormLabel bg={"#FFFFFF"}>利用者の年齢</FormLabel>
              <PulldownMenu arr={age} />
            </Box>
            <Box w={"100%"} mt={"2vh"}>
              <FormLabel bg={"#FFFFFF"}>連絡先電話番号</FormLabel>
              <Text color={"red.400"}>{nameError ? nameError : ""}</Text>
              <InputForm
                placeholder="田中太郎"
                value={name}
                onChange={inputName}
                bg={"#FFFFFF"}
              />
            </Box>
            <Box w={"100%"} h={"25vh"} my={"1vh"}>
              <FormLabel my={"1vh"}>お困りごと</FormLabel>
              <Text color={"red.400"}>{detailsError ? detailsError : ""}</Text>
              <TextArea
                placeholder="入力してください"
                value={details}
                onChange={inputDetails}
                height={"20vh"}
              />
            </Box>
            <Box w={"100%"} mt={"3vh"}>
              <PrimaryButton
                onClick={CreateInquiry}
                bg={"#F06364"}
                color={"#ffffff"}
                fontSize={"20px"}
                width="100%"
                height={"5vh"}
              >
                確認へ進む
              </PrimaryButton>
            </Box>
            <button onClick={AlertAge} fontSize={"bold"}>
              関数確認ボタンやで
            </button>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};
