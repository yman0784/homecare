import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Textarea,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
// import { Header } from "../organisms/Header";
// import { Footer } from "../organisms/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

// CORS対応のための設定
axios.defaults.baseURL = "http://localhost:3000"; // サーバーのベースURLに設定

export const ContactForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const {
    register, // inputタグとバリデーションルールを紐付けるための関数
    handleSubmit, // フォームのsubmitイベント時に呼ばれる関数
    formState: { errors }, // バリデーションエラーの情報が格納
  } = useForm();

  const onSubmit = (data) => {
    console.log("aaa");
    console.log(data);
    handleSubmit(onSubmit);
  };

  return (
    <div>
      <Header />
      <Flex justify="center" bg="#F5F7F7" overflow="auto" height="100vh">
        <Box
          w={{ base: "80%", md: "750px" }}
          bg="#fff"
          p="16px"
          borderRadius="5px"
          style={{ boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)" }}
          mt="40px"
          mb="40px"
          h="fit-content"
        >
          <Stack>
            <Heading color="#2E3331" fontSize="20px" mb="16px">
              お問い合わせ
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mb="20px">
                <FormControl isInvalid={errors.name}>
                  <FormLabel color="#6D7570" fontSize="13px" fontWeight="bold">
                    お名前
                  </FormLabel>
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                  <Input
                    name="name"
                    placeholder="田中太郎"
                    {...register("name", {
                      required: "入力してください",
                      maxLength: { value: 50, message: "最大50文字です" },
                      pattern: /\A[a-zA-Zぁ-んァ-ンー一-龠々\s]+\z/,
                    })}
                  />
                </FormControl>
              </Box>
              <Box mb="20px">
                <FormControl isInvalid={errors.email}>
                  <FormLabel color="#6D7570" fontSize="13px" fontWeight="bold">
                    返信用メールアドレス
                  </FormLabel>
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                  <Input
                    name="email"
                    placeholder="homecarenavi@mail.com"
                    {...register("email", {
                      required: "入力してください",
                      maxLength: {
                        value: 255,
                        message: "255文字以内で入力してください",
                      },
                      pattern: {
                        value:
                          /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
                        message: "有効なメールアドレスではありません",
                      },
                    })}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl isInvalid={errors.content}>
                  <FormLabel color="#6D7570" fontSize="13px" fontWeight="bold">
                    お問合せ内容
                  </FormLabel>
                  <FormErrorMessage>
                    {errors.content && errors.content.message}
                  </FormErrorMessage>
                  <Textarea
                    name="content"
                    placeholder="入力してください"
                    {...register("content", {
                      required: "入力してください",
                      maxLength: {
                        value: 500,
                        message: "500文字以内で入力してください",
                      },
                    })}
                    fontSize="16px"
                    border=" solid 1px #D9DEDE "
                    borderRadius="5px"
                    w="100%"
                    size="lg"
                    height="356px"
                    p={4}
                  />
                </FormControl>
              </Box>
              <Button
                type="submit"
                bg="#F06364"
                color="#fff"
                p="30px"
                my="25px"
                w="100%"
                border="none"
                borderRadius="5px"
                _hover={{ opacity: 0.8 }}
                fontSize={{ base: "md", md: "20px" }}
                fontWeight="bold"
                onClick={handleSubmit(onSubmit)}
              >
                この内容で問い合わせる
              </Button>
            </form>
          </Stack>
        </Box>
      </Flex>
      <Footer />
    </div>
  );
};
