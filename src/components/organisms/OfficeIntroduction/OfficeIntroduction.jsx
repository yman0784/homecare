import React from "react";
import "./OfficeIntroduction.css";

const OfficeIntroduction = ({ images }) => {
  return (
    <div className="introduction-container">
      <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
        事業所紹介タイトル事業所紹介タイトル事業所紹介タイトル事業所紹介タイトル
      </h2>
      <p style={{ color: "#707f89", fontSize: "14px", marginTop: "20px" }}>
        ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。ここに事業所の特徴テキストが入ります。{" "}
      </p>
      <div className="introduction-card">
        {images &&
          images.map((image, index) => (
            <article key={index}>
              <img src={image} alt={`画像 ${index + 1}`} />
              <p
                style={{ marginTop: "8px", color: "#707f89", fontSize: "12px" }}
              >
                画像の説明テキストがはいります画像の説明テキストがはいります
              </p>
            </article>
          ))}
      </div>
    </div>
  );
};

export default OfficeIntroduction;
