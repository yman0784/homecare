import React from "react";
import logo from "../../../images/logo.svg";
import {
  Box,
  Flex,
  Link,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="nav"
        h="6vh"
        w="100vw"
        bg="#ffffff"
        boxShadow=""
        borderTop="2px"
        borderTopColor="#F06364"
        align="center"
        justify="space-between"
        shadow={"xs"}
        position={"fixed"}
        top={0}
        zIndex={1}
      >
        <Box>
          <Image src={logo} h="3vh" w="15vw" ml={"2vh"}></Image>
        </Box>
        <Flex
          align="center"
          justify="space-between"
          color="#707f89"
          pt={"22px"}
          pr={"14vw"}
          pb={"19px"}
          display={{ base: "none", md: "flex" }}
        >
          <Box>
            <Link pr={"20px"} fontSize={"13px"}>
              閲覧履歴
            </Link>
            <Link pr={"20px"} fontSize={"13px"}>
              ブックマーク
            </Link>
            <Link pr={"20px"} fontSize={"13px"}>
              予約履歴
            </Link>
            <Link pr={"20px"} fontSize={"13px"}>
              お礼投稿機能
            </Link>
            <Link fontSize={"13px"}>登録情報</Link>
          </Box>
        </Flex>
        <IconButton
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg={"gray.100"}>
              <Button
                color={"white"}
                w={"90%"}
                bg={"red"}
                mx={"1vw"}
                my={"1vh"}
              >
                閲覧履歴
              </Button>
              <Button
                color={"white"}
                w={"90%"}
                bg={"yellow"}
                mx={"1vw"}
                my={"1vh"}
              >
                ブックマーク
              </Button>
              <Button
                color={"white"}
                w={"90%"}
                bg={"blue"}
                mx={"1vw"}
                my={"1vh"}
              >
                予約履歴
              </Button>
              <Button
                color={"white"}
                w={"90%"}
                bg={"green"}
                mx={"1vw"}
                my={"1vh"}
              >
                お礼投稿機能
              </Button>
              <Button
                color={"white"}
                w={"90%"}
                bg={"purple"}
                mx={"1vw"}
                my={"1vh"}
              >
                登録情報
              </Button>
              <Button
                color={"white"}
                w={"90%"}
                bg={"red"}
                mx={"1vw"}
                my={"1vh"}
              >
                プライバシーポリシー
              </Button>
              <Button
                color={"white"}
                w={"90%"}
                bg={"black"}
                mx={"1vw"}
                my={"1vh"}
              >
                利用規約
              </Button>
              <Button
                color={"white"}
                w={"90%"}
                bg={"orange"}
                mx={"1vw"}
                my={"1vh"}
              >
                お問い合わせ
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
