import React from "react";
import "./OfficeOverview.css";

const OfficeOverview = () => {
  return (
    <div className="overview-container">
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          margin: "16px 0 16px 0",
        }}
      >
        施設概要
      </h2>
      <div className="wrapper">
        <div className="content-left">住所</div>
        <div className="content-right">
          <p>〒157-0072</p>
          <p>東京都世田谷区祖師谷4-3-15</p>
        </div>
      </div>
      <div className="wrapper">
        <div className="content-left">類型</div>
        <div className="content-right">
          介護付きホーム（サービス付き高齢者向け住宅　特定施設
        </div>
      </div>
      <div className="wrapper">
        <div className="content-left">開設年月</div>
        <div className="content-right">2011年3月1日</div>
      </div>
      <div className="wrapper">
        <div className="content-left">居室数</div>
        <div className="content-right">30室</div>
      </div>
      <div className="wrapper">
        <div className="content-left">入居時の要件</div>
        <div className="content-right">
          満60歳以上の方、入居時自立・要支援・要介護
        </div>
      </div>
      <div className="wrapper">
        <div className="content-left">共用設備</div>
        <div className="content-right">
          エントランス、食堂券機能訓練室、個浴、大浴場、特殊浴槽、和室、談話室、シアタールーム、屋上庭園
        </div>
      </div>
      <div className="wrapper">
        <div className="content-left">
          経営・<br></br>事業体
        </div>
        <div className="content-right">
          株式会社ユニマット リタイアメント・コミュニティ
        </div>
      </div>
      <div className="wrapper">
        <div className="content-left">公式サイト</div>
        <div className="content-right-url">
          https://www.unimat-rc.co.jp/shisetsu/sosigaya_871/index.html
        </div>
      </div>
    </div>
  );
};

export default OfficeOverview;
