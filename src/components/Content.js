import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const Content = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="contact-form">
          <p>お問い合わせ</p>
          <dl>
            <dt>お名前</dt>
            <input></input>
          </dl>
          <dl>
            <dt>返信用メールアドレス</dt>
            <input></input>
          </dl>
          <dl>
            <dt>お問い合わせ内容</dt>
            <textarea></textarea>
          </dl>
          <button>
            <Link to="complete">この内容で問い合わせる</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
