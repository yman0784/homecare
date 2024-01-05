import React from "react";
import "./OfficeIntroduction.css";

const OfficeIntroduction = ({ images }) => {
  return (
    <div className="introduction-container">
      <h2>タイトル</h2>
      <p>
        説明Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="introduction-card">
        {images &&
          images.map((image, index) => (
            <article key={index}>
              <img src={image} alt={`画像 ${index + 1}`} />
              <p>
                画像 {index + 1} の説明。Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </article>
          ))}
      </div>
    </div>
  );
};

export default OfficeIntroduction;
