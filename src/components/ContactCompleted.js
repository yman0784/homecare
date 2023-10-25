import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const ContactCompleted = () => {
  return (
    <>
      <Header />
      <div>
        <h2>問い合わせ完了</h2>
        <p>
          ご予約が完了しました。
          <br />
          事業所からの連絡をお待ち下さい。
        </p>
        <Link to="/">事業所のページに戻る</Link>
      </div>
      <Footer />
    </>
  );
};
