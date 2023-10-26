import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Flex
      as="nav"
      h="50px"
      w="1280px"
      bg="#ffffff"
      align="center"
      justify="space-between"
    >
      <Flex pl={"145px"}>
        <Box color="#2E3331" fontSize={"14px"} fontWeight="bold" mr={"24px"}>
          ホームケアナビ
        </Box>
        <Box color="#98a6b5" fontSize={"10px"}>
          ©hogehoge
        </Box>
      </Flex>
      <Flex pt={"16px"} pr={"145px"} pb={"18px"}>
        <Box h={"16px"}>
          <Link mr={"20px"} color="#F06364">
            プライバシーポリシー
          </Link>
          <Link mr={"20px"} color="#F06364">
            利用規約
          </Link>
          <Link color="#F06364">お問い合わせ</Link>
        </Box>
      </Flex>
    </Flex>
  );
};
