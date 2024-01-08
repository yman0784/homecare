import React, { useState } from "react";
import "./StaffIntroduction.css";
import { Link } from "react-router-dom";
import StaffCard from "../../molcures/Staff/StaffCard";

const StaffIntroduction = ({ staff }) => {
  const arrowIcon = "/ArrowUp - Small.png";

  const maxVisibleStaff = 3; // 表示する最大スタッフ数
  const [showAllStaff, setShowAllStaff] = useState(false);

  const handleShowAllStaff = () => {
    setShowAllStaff(true);
  };

  const handleShowLessStaff = () => {
    setShowAllStaff(false);
  };

  return (
    <div
      className={`staff-introduction-container ${
        !showAllStaff ? "small-container" : ""
      }`}
    >
      <div className="staff-top">
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>スタッフ紹介</h2>
        <div>
          <Link
            to="/office_detail"
            style={{ color: "#f06566", fontSize: "14px" }}
          >
            <p>お礼を投稿する</p>
          </Link>
        </div>
      </div>
      <div style={{ marginRight: "16px", position: "relative" }}>
        {staff
          .slice(0, showAllStaff ? staff.length : maxVisibleStaff)
          .map((staff) => (
            <div style={{ margin: "24px 0 0 0" }} key={staff.id}>
              <StaffCard
                image={staff.image}
                name={staff.name}
                kana={staff.kana}
                introduction={staff.introduction}
                comment_title={staff.comment_title}
                comment={staff.comment}
              />
            </div>
          ))}
        {!showAllStaff && staff.length > maxVisibleStaff && (
          <div style={{ margin: "24px 0 0 0", position: "relative" }}>
            <div>
              <StaffCard
                image={staff.image}
                name={staff[maxVisibleStaff].name}
                kana={staff[maxVisibleStaff].kana}
                comment_title={staff[maxVisibleStaff].comment_title}
                introduction={staff[maxVisibleStaff].introduction}
                height="220px"
              />
            </div>
            {/* もっと見るボタンをクリックしたら showAllStaff を true に切り替え */}
            <div
              style={{
                height: "14%",
                width: "100%",
                padding: "8px",
                borderRadius: "8px",
                textAlign: "center",
                cursor: "pointer",
                zIndex: 1,
                background:
                  "linear-gradient(to top, #fff, rgba(255, 255, 255, 0.8))",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "9vh",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              onClick={handleShowAllStaff}
            >
              <p
                style={{
                  backgroundColor: "white",
                  color: "#f06364",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                もっと見る
              </p>
              <img
                src={arrowIcon}
                alt={`アローの画像`}
                style={{
                  width: "9px",
                  height: "6px",
                  marginLeft: "12px",
                }}
              />
            </div>
          </div>
        )}
        {showAllStaff && (
          <div style={{ margin: "24px 0 0 0" }}>
            {/* 一部表示に戻すボタンをクリックしたら showAllStaff を false に切り替え */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                padding: "8px",
                borderRadius: "8px",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={handleShowLessStaff}
            >
              <p
                style={{
                  marginBottom: "8px",
                  color: "#f06364",
                  fontWeight: "bold",
                }}
              >
                一部表示に戻す
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffIntroduction;
