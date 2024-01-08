import React from "react";
import "./StaffCard.css";

const StaffCard = ({
  image,
  name,
  kana,
  introduction,
  comment_title,
  comment,
  height,
}) => {
  const defaultImage = "/グループ 1517.png";
  const userIcon = "/User.png";

  return (
    <div style={{ display: "flex", height: `${height}`, marginRight: "16px" }}>
      <img
        src={image || defaultImage}
        alt={`${name}の画像`}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          margin: "3px 20px 38px 16px",
        }}
      />
      <div>
        <div className="staff-introduction">
          <div className="staff-name">
            <p style={{ width: "68px", fontWeight: "bold", fontSize: "16px" }}>
              {name}
            </p>

            <p
              style={{
                width: "75px",
                fontSize: "12px",
                color: "#707f89",
                whiteSpace: "nowrap",
              }}
            >
              {kana}
            </p>
          </div>
          <div>
            <p
              style={{
                width: "260px",
                fontSize: "12px",
                color: "#707f89",
                marginLeft: "60px",
              }}
            >
              {introduction}
            </p>
          </div>
        </div>
        {comment ? (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                width: "388px",
                backgroundColor: "#F3FDF9",
                marginTop: "16px",
                padding: "6px 8px 8px 10px",
              }}
            >
              <img
                src={userIcon}
                alt={`ユーザーの画像`}
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  margin: "10px 8px 0 10px",
                }}
              />
              <div>
                <p
                  style={{
                    width: "130px",
                    fontWeight: "bold",
                    fontSize: "10px",
                  }}
                >
                  {comment_title}
                </p>
                <p style={{ fontSize: "12px" }}>{comment}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default StaffCard;
