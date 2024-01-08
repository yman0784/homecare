import React from "react";
import { Header } from "../atoms/layout2/Header";
import { Footer } from "../atoms/layout2/Footer";
import Carousel from "../organisms/Carousel/Carousel.jsx";
import OfficeInfo from "../organisms/OfficeInfo/OfficeInfo";
import StaffIntroduction from "../organisms/StaffIntroduction/StaffIntroduction";
import OfficeOverview from "../organisms/OfficeOverview/OfficeOverview";
import OfficeIntroduction from "../organisms/OfficeIntroduction/OfficeIntroduction";

const OfficeDetail = () => {
  const images = [
    "/cat/image1.jpg",
    "/cat/image2.jpg",
    "/cat/image3.jpg",
    "/cat/image4.jpg",
    "/cat/image5.jpg",
  ];
  const thumbnails = [
    "/cat/image1.jpg",
    "/cat/image2.jpg",
    "/cat/image3.jpg",
    "/cat/image4.jpg",
    "/cat/image5.jpg",
  ];

  const staff = [
    {
      id: 1,
      image: "",
      name: "田中 太郎",
      kana: "たなか たろう",
      introduction:
        "スタッフ説明テキストが入りますスタッフ説明テキストが入ります",
      comment_title: "ユーザーからのお礼コメント",
      comment:
        "リハビリのノウハウがあり、足の悪い父のお世話も安心して任せられました。親切にしていただき感謝しています。",
    },
    {
      id: 2,
      image: "/staff/ryoma.jpg",
      name: "田中 太郎",
      kana: "たなか たろう",
      introduction:
        "スタッフ説明テキストが入りますスタッフ説明テキストが入ります",
      comment_title: "ユーザーからのお礼コメント",
      comment:
        "リハビリのノウハウがあり、足の悪い父のお世話も安心して任せられました。親切にしていただき感謝しています。",
    },
    {
      id: 3,
      image: "/staff/saigou.jpg",
      name: "田中 太郎",
      kana: "たなか たろう",
      introduction:
        "スタッフ説明テキストが入りますスタッフ説明テキストが入ります",
      comment_title: "ユーザーからのお礼コメント",
      comment:
        "リハビリのノウハウがあり、足の悪い父のお世話も安心して任せられました。親切にしていただき感謝しています。",
    },
    {
      id: 4,
      image: "",
      name: "田中 太郎",
      kana: "たなか たろう",
      introduction:
        "スタッフ説明テキストが入りますスタッフ説明テキストが入ります",
      comment_title: "ユーザーからのお礼コメント",
      comment:
        "リハビリのノウハウがあり、足の悪い父のお世話も安心して任せられました。親切にしていただき感謝しています。",
    },
    {
      id: 5,
      image: "",
      name: "田中 太郎",
      kana: "たなか たろう",
      introduction:
        "スタッフ説明テキストが入りますスタッフ説明テキストが入ります",
      comment_title: "ユーザーからのお礼コメント",
      comment:
        "リハビリのノウハウがあり、足の悪い父のお世話も安心して任せられました。親切にしていただき感謝しています。",
    },
  ];

  const officeImages = ["/dog/dog1.jpg", "/dog/dog2.jpg"];

  return (
    <div>
      <Header />
      <div style={{ flex: 1, margin: "10vh auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Carousel images={images} thumbnails={thumbnails} />
            <OfficeIntroduction images={officeImages} />
            <StaffIntroduction staff={staff} />
            <OfficeOverview />
          </div>
          <div style={{ marginLeft: "32px" }}>
            <OfficeInfo />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfficeDetail;
