import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { InputForm } from "./InputForm";
import { TextArea } from "./TextArea";
import { ContactButton } from "./ContactButton";

export const Content = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  const onChangeName = (event) => setName(event.target.value);
  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangeInquiry = (event) => setInquiry(event.target.value);

  const onClickAdd = () => {
    const contactDetail = [];
    contactDetail.push(name, email, inquiry);
  };

  return (
    <>
      <Header />
      <div className="content">
        <div className="contact-form">
          <p>お問い合わせ</p>
          <dl>
            <dt>お名前</dt>
            <InputForm
              placeholder="田中太郎"
              value={name}
              onChange={onChangeName}
            />
          </dl>
          <dl>
            <dt>返信用メールアドレス</dt>
            <InputForm
              placeholder="homecarenavi@mail.com"
              value={email}
              onChange={onChangeEmail}
            />
          </dl>
          <dl>
            <dt>お問い合わせ内容</dt>
            <TextArea
              placeholder="入力してください"
              value={inquiry}
              onChange={onChangeInquiry}
            />
          </dl>
          <ContactButton onClick={onClickAdd} />
        </div>
      </div>
      <Footer />
    </>
  );
};
