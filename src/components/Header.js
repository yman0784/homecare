import React from "react";
import logo from "../images/logo.svg";
import { Box, Flex, Link, Image } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      as="nav"
      h="60px"
      w="1280px"
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
        <Image src={logo} h="32px" w="157.44px" m={[15, 0, 13, 145]}></Image>
      </Box>
      <Flex
        align="center"
        justify="space-between"
        color="#707f89"
        pt={"22px"}
        pr={"145px"}
        pb={"19px"}
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
    </Flex>
  );
};
