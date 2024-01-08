import React from "react";
import logo from "../../../images/logo.svg";
import { Box, Flex, Link, Image, useDisclosure } from "@chakra-ui/react";
import { PrimaryButton } from "../button/PrimaryButton";

export const Header = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "1280px",
        backgroundColor: "#ffffff",
        borderTop: "solid 2px",
        borderTopColor: "#f06364",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Box>
          <Image src={logo} ml={"145px"} mr={"330px"}></Image>
        </Box>
        <Flex
          align="center"
          justify="space-between"
          color="#707f89"
          pt={"22px"}
          // pr={"14vw"}
          pb={"19px"}
          display={{ base: "none", md: "flex" }}
        >
          <Box>
            <Link mr={"20px"} fontSize={"13px"}>
              閲覧履歴
            </Link>
            <Link mr={"20px"} fontSize={"13px"}>
              ブックマーク
            </Link>
            <Link mr={"32px"} fontSize={"13px"}>
              予約履歴
            </Link>
            <button
              style={{
                backgroundColor: "#ffffff",
                color: "#6d7570",
                width: "120px",
                height: "36px",
                border: "solid 1px #cdd6dd",
                borderRadius: "5px",
                marginRight: "8px",
              }}
            >
              ログイン
            </button>
            <button
              style={{
                backgroundColor: "#F06364",
                color: "white",
                width: "120px",
                height: "36px",
                borderRadius: "5px",
              }}
            >
              新規登録
            </button>
          </Box>
        </Flex>
      </div>
    </div>
  );
};
