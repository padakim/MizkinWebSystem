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

  .features {
    display: grid;
    grid-template-columns: repeat(3, 20rem);
    grid-template-rows: repeat(2, 10rem);
    row-gap: 1rem;
    column-gap: 1rem;
  }

  .feature-title {
    grid-area: title;
    font-size: 18px;
    color: ${palette.textColors[2]};
  }

  .feature-content {
    grid-area: content;
    color: ${palette.textColorsGray[1]};
    line-height: 30px;
    font-size: 16px;
    margin-top: 8px;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <section id="about-us" className="about-us">
        <h2>会社概要</h2>
        <p className="intro">三人行、必有我師焉</p>
        <div className="features">
          <MainItemWrapper>
            <h4 className="feature-title">会社名</h4>
            <p className="feature-content">ミツキンシステム株式会社</p>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="feature-title">設立</h4>
            <p className="feature-content">2021年05月</p>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="feature-title">資本金</h4>
            <p className="feature-content">３００万円</p>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="feature-title">本社所在地</h4>
            <p className="feature-content">大阪府大阪市天王寺区空清町2-4</p>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="feature-title">代表取締役</h4>
            <p className="feature-content">崔延鑫</p>
          </MainItemWrapper>
          <MainItemWrapper>
            <h4 className="feature-title">決算期</h4>
            <p className="feature-content">4月</p>
          </MainItemWrapper>
        </div>
      </section>
    </Wrapper>
  );
};

export default About;
