import styled from "styled-components";
import Responsive from "../common/Responsive";
import palette from "../../lib/styles/palette";
import MainItemWrapper from "../common/MainItemWrapper";

const Wrapper = styled(Responsive)`
  section {
    display: grid;
    justify-items: center;
    max-width: 1180px;
    padding-bottom: 2rem;
    margin: 1rem 0;
  }
  h2 {
    font-size: 34px;
    color: ${palette.textColors[1]};
  }
  h2::after {
    content: "";
    display: block;
    width: 80%;
    height: 4px;
    background-color: ${palette.primaryColor[0]};
    margin-top: 8px;
    transform: translateX(10%);
  }
  h4,
  p {
    margin: 1rem;
  }
  .intro {
    font-size: 24px;
    color: ${palette.textColorsGray[2]};
    padding-bottom: 2rem;
  }
  .services {
    display: grid;
    grid-template-columns: repeat(3, 20rem);
    grid-template-rows: repeat(2, 10rem);
    row-gap: 1rem;
    column-gap: 1rem;
  }

  .service-title {
    grid-area: title;
    font-size: 18px;
    color: ${palette.textColors[2]};
  }

  .service-content {
    grid-area: content;
    color: ${palette.textColorsGray[1]};
    line-height: 30px;
    font-size: 16px;
    margin-top: 8px;
  }
`;

const Service = () => {
  return (
    <Wrapper>
      <section id="service" className="service">
        <h2>事業内容</h2>
        <p className="intro">三人寄れば文殊の知恵</p>
        <div className="services">
          <MainItemWrapper>
            <h4 className="service-title">システム開発</h4>
            <p className="service-content">
              お客様の望むビジネスを
              <br />
              サポートするシステム提供
            </p>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="service-title">ITコンサル</h4>
            <p className="service-content">
              システムのリプレース・
              <br />
              再構築に関する提案＆支援
            </p>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="service-title">SES</h4>
            <p className="service-content">必要に応じた人材サービスを提案</p>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="service-title">Webサイト制作</h4>
            <p className="service-content">
              HomePage・ECサイト構築などに
              <br />
              関する提案＆支援
            </p>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="service-title">スクール事業</h4>
            <p className="service-content">
              IT研修などの人材育成サービスを
              <br />
              提供＆支援
            </p>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="service-title">ボランティア活動</h4>
            <p className="service-content">
              IT無料授業・SDGs（持続可能な開発
              <br />
              目標）取込
            </p>
          </MainItemWrapper>
        </div>
      </section>
    </Wrapper>
  );
};

export default Service;
