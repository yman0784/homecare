import React from "react";
import "./OfficeInfo.css";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

const OfficeInfo = () => {
  const locationIcon = "/グループ 1508.png";
  const telIcon = "/グループ 1507.png";
  const userIcon = "/User.png";
  const circleIcon = "/楕円形 289.png";
  const crossIcon = "/グループ 1505.png";

  const buttonProps = {
    bg: "#F06364",
    color: "white",
    width: "406px",
    height: "60px",
  };
  return (
    <div className="info-container">
      <div className="info-title">
        祖師谷ケアパークそよ風祖師谷ケアパークそよ風祖師最大30文字
      </div>
      <div className="address">
        <p>〒157-0072</p>
        <p>東京都世田谷区祖師谷4-3-15</p>
      </div>
      <div style={{ display: "flex", marginBottom: "16px" }}>
        <div style={{ display: "flex" }}>
          <img
            src={locationIcon}
            alt={`ロケーションの画像`}
            style={{
              width: "11px",
              height: "16px",
              borderRadius: "50%",
            }}
          />
          <p style={{ fontSize: "13px", marginLeft: "6px" }}>
            祖師ヶ谷大蔵駅 徒歩5分
          </p>
        </div>
        <div style={{ display: "flex", marginLeft: "24px" }}>
          <img
            src={userIcon}
            alt={`人の画像`}
            style={{
              width: "11px",
              height: "16px",
              borderRadius: "50%",
            }}
          />
          <p style={{ fontSize: "13px", marginLeft: "4px" }}>スタッフ数 5人</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <img
          src={telIcon}
          alt={`電話の画像`}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
          }}
        />
        <p className="telNum">00-0000-000</p>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}
      >
        <div
          style={{
            width: "32px",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#98a6b5",
            whiteSpace: "nowrap",
          }}
        >
          FAX
        </div>
        <p className="telNum">00-0000-000</p>
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
      <div>
        <p
          style={{
            fontWeight: "bold",
            color: "#707f89",
            fontSize: "13px",
            margin: "18px 0 12px 0",
          }}
        >
          営業日
        </p>
      </div>
      <div>
        <table
          style={{
            width: "406px",
          }}
        >
          <tr>
            <th className="sunday">日</th>
            <th className="weekday">月</th>
            <th className="weekday">火</th>
            <th className="weekday">水</th>
            <th className="weekday">木</th>
            <th className="weekday">金</th>
            <th className="saturday">土</th>
          </tr>
          <tr>
            <th>
              <img
                src={circleIcon}
                alt={`丸の画像`}
                style={{
                  width: "21px",
                  height: "21px",
                  borderRadius: "50%",
                  margin: "9px auto",
                }}
              />
            </th>
            <th>
              <img
                src={circleIcon}
                alt={`丸の画像`}
                style={{
                  width: "21px",
                  height: "21px",
                  borderRadius: "50%",
                  margin: "9px auto",
                }}
              />
            </th>
            <th>
              <img
                src={crossIcon}
                alt={`☓の画像`}
                style={{
                  width: "21px",
                  height: "21px",
                  margin: "9px auto",
                  borderRadius: "50%",
                }}
              />
            </th>
            <th>
              <img
                src={circleIcon}
                alt={`丸の画像`}
                style={{
                  width: "21px",
                  height: "21px",
                  margin: "9px auto",
                  borderRadius: "50%",
                }}
              />
            </th>
            <th>
              <img
                src={circleIcon}
                alt={`丸の画像`}
                style={{
                  width: "21px",
                  height: "21px",
                  margin: "9px auto",
                  borderRadius: "50%",
                }}
              />
            </th>
            <th>
              <img
                src={circleIcon}
                alt={`丸の画像`}
                style={{
                  width: "21px",
                  height: "21px",
                  margin: "9px auto",
                  borderRadius: "50%",
                }}
              />
            </th>
            <th>
              <img
                src={circleIcon}
                alt={`丸の画像`}
                style={{
                  width: "21px",
                  height: "21px",
                  margin: "9px auto",
                  borderRadius: "50%",
                }}
              />
            </th>
          </tr>
        </table>
      </div>
      <div>
        <p style={{ color: "#707f89", fontSize: "11px", marginTop: "8px" }}>
          営業日時についてのテキストが入ります営業日時についてのテキストが入ります営業日時についてのテキストが入ります営業日時についてのテキストが入ります営業日時についてのテキストが入ります
        </p>
      </div>
    </div>
  );
};

export default OfficeInfo;
