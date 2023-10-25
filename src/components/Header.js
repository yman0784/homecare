import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="heading">
        <h1 className="header-logo">
          <div>家</div>
          <div>ホームケアナビ</div>
        </h1>
      </div>
      <div className="header-navbar">
        <ul className="header-nav-lists">
          <li className="header-nav-lists__list">
            <a href="">閲覧履歴</a>
          </li>
          <li className="header-nav-lists__list">
            <a href="">ブックマーク</a>
          </li>
          <li className="header-nav-lists__list">
            <a href="">予約履歴</a>
          </li>
          <li className="header-nav-lists__list">
            <a href="">お礼投稿機能</a>
          </li>
          <li className="header-nav-lists__list">
            <a href="">登録情報</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
