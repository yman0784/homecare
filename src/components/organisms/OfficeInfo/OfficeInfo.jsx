import React from "react";
import "./OfficeInfo.css";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

const OfficeInfo = () => {
  const buttonProps = {
    bg: "#F06364",
    color: "white",
    width: "90%",
    height: "100%",
  };
  return (
    <div className="info-container">
      <div>事業所名 最大３０文字</div>
      <div className="address">
        <p>〒157-0072</p>
        <p>東京都世田谷区</p>
      </div>
      <div>
        <p>00-0000-000</p>
        <p>00-0000-000</p>
      </div>

      <div className="button-wrapper">
        <PrimaryButton
          bg={buttonProps.bg}
          color={buttonProps.color}
          width={buttonProps.width}
          height={buttonProps.height}
          fontSize={{ base: "md", md: "20px" }}
          _hover={{ opacity: 0.8 }}
        >
          web予約する
        </PrimaryButton>
      </div>
    </div>
  );
};

export default OfficeInfo;
