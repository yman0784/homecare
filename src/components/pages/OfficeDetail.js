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

  const officeImages = ["/dog/dog1.jpg", "/dog/dog2.jpg"];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ flex: 1, margin: "10vh auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Carousel images={images} thumbnails={thumbnails} />
            <OfficeIntroduction images={officeImages} />
            <StaffIntroduction />
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
