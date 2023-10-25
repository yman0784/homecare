import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">
        <h1 className="footer-logo">
          <div>ホームケアナビ</div>
          <div>©hogehoge</div>
        </h1>
      </div>
      <div className="footer-navbar">
        <ul className="footer-nav-lists">
          <li className="footer-nav-lists__list">
            <a href="">プライバシーポリシー</a>
          </li>
          <li className="footer-nav-lists__list">
            <a href="">利用規約</a>
          </li>
          <li className="footer-nav-lists__list">
            <a href="">お問い合わせ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
