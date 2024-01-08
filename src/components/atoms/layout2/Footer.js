import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    // <div style={{ margin: "0 auto", width: "100%" }}>
    <div
      style={{
        width: "1280px",
        display: "flex",
        justifyContent: "start",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      ></div>
      <Flex alignItems={"center"} mr={"555px"}>
        <Box
          color="#2E3331"
          fontSize={"14px"}
          fontWeight="bold"
          mr={"24px"}
          ml={"145px"}
          whiteSpace={"nowrap"}
        >
          ホームケアナビ
        </Box>
        <Box color="#98a6b5" fontSize={"10px"}>
          ©hogehoge
        </Box>
      </Flex>
      <Flex pt={"16px"} pb={"18px"} display={{ base: "none", md: "flex" }}>
        <Box h={"16px"} mr={"145px"} whiteSpace={"nowrap"}>
          <Link mr={"20px"} color="#F06364" fontSize={"11px"}>
            プライバシーポリシー
          </Link>
          <Link mr={"20px"} color="#F06364" fontSize={"11px"}>
            利用規約
          </Link>

          <Link color="#F06364" fontSize={"11px"}>
            お問い合わせ
          </Link>
        </Box>
      </Flex>
    </div>
  );
};
